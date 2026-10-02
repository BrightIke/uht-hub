#!/usr/bin/env node
/*
  Usage: node scripts/extract-pptx.js path/to/UHT_HUB_Pitch_Deck.pptx

  This script extracts media files from the PPTX and slide text.
  It writes extracted images to `public/media/` and copies them to `public/slides/slide-<n>.<ext>`.
  It also writes `public/slides/index.json` (list of image filenames)
  and `public/slides/texts.json` (array of slide texts).

  Requires: npm install unzipper xml2js
*/

import fs from 'fs'
import path from 'path'
import unzipper from 'unzipper'
import { parseStringPromise } from 'xml2js'

async function main(){
  const arg = process.argv[2]
  if(!arg){
    console.error('Usage: node scripts/extract-pptx.js path/to/deck.pptx')
    process.exit(1)
  }

  const input = path.resolve(arg)
  if(!fs.existsSync(input)){
    console.error('File not found:', input)
    process.exit(1)
  }

  const outMedia = path.resolve('public/media')
  const outSlides = path.resolve('public/slides')
  fs.mkdirSync(outMedia, { recursive: true })
  fs.mkdirSync(outSlides, { recursive: true })

  const slidesText = {}
  const mediaFiles = []

  const directory = await unzipper.Open.file(input)
  for(const entry of directory.files){
    const filePath = entry.path.replace(/\\/g, '/')
    if(filePath.startsWith('ppt/media/')){
      const basename = path.basename(filePath)
      const outPath = path.join(outMedia, basename)
      const content = await entry.buffer()
      fs.writeFileSync(outPath, content)
      mediaFiles.push(basename)
    }

    if(filePath.startsWith('ppt/slides/slide')){
      const match = filePath.match(/slide(\d+)\.xml$/)
      const slideNum = match ? Number(match[1]) : null
      if(slideNum){
        const xml = (await entry.buffer()).toString('utf8')
        try{
          const parsed = await parseStringPromise(xml)
          // collect all text in a:t elements
          const texts = []
          const search = (obj) => {
            if(typeof obj !== 'object' || obj === null) return
            for(const k of Object.keys(obj)){
              if(k === 'a:t'){
                const t = obj[k]
                if(Array.isArray(t)) texts.push(...t.map(x=> (typeof x === 'string' ? x : '').trim()))
              } else {
                const v = obj[k]
                if(Array.isArray(v)) v.forEach(search)
                else search(v)
              }
            }
          }
          search(parsed)
          slidesText[slideNum] = texts.filter(Boolean).join(' ')
        }catch(err){
          console.warn('Failed parse slide xml', filePath, err.message)
        }
      }
    }
  }

  // Copy media files into slides/ as slide-<i>.<ext> by order
  const index = []
  for(let i=0;i<mediaFiles.length;i++){
    const basename = mediaFiles[i]
    const ext = path.extname(basename)
    const dest = `slide-${i+1}${ext}`
    fs.copyFileSync(path.join(outMedia, basename), path.join(outSlides, dest))
    index.push(dest)
  }

  // Build texts array in order of slide numbers
  const textsArr = []
  const slideNums = Object.keys(slidesText).map(n=>Number(n)).sort((a,b)=>a-b)
  for(const n of slideNums){
    textsArr.push(slidesText[n] || '')
  }

  fs.writeFileSync(path.join(outSlides, 'index.json'), JSON.stringify(index, null, 2))
  fs.writeFileSync(path.join(outSlides, 'texts.json'), JSON.stringify(textsArr, null, 2))

  console.log('Extracted', mediaFiles.length, 'media files,', slideNums.length, 'slide texts')
  console.log('Slides index:', path.join(outSlides, 'index.json'))
}

main().catch(err=>{
  console.error(err)
  process.exit(1)
})
