import React, { useEffect, useState } from 'react'

export default function SlidesGallery(){
  const [images, setImages] = useState<string[]>([])
  const [texts, setTexts] = useState<string[]>([])

  useEffect(()=>{
    fetch('/slides/index.json')
      .then(r=>r.json())
      .then(setImages)
      .catch(()=>setImages([]))

    fetch('/slides/texts.json')
      .then(r=>r.json())
      .then(setTexts)
      .catch(()=>setTexts([]))
  },[])

  return (
    <section id="slides" className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-uht-blue">Pitch Deck & Slides</h2>
          <p className="mt-2 text-gray-700">Download our full pitch deck or browse slide images below. Place the original PPTX in `public/` if you'd like a direct download.</p>
        </div>
        <div>
          <a href="/UHT_HUB_Pitch_Deck.pptx" className="cta" download>Download Pitch Deck</a>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.length>0 ? images.map((img, idx) => (
          <div key={img} className="bg-white rounded shadow p-2">
            <img src={`/slides/${img}`} alt={`Slide ${idx+1}`} className="w-full h-40 object-contain mb-2" />
            <div className="text-sm text-gray-500">{texts[idx] ? texts[idx].slice(0,120) + (texts[idx].length>120? '...':'') : `Slide ${idx+1}`}</div>
          </div>
        )) : (
          <div className="text-gray-500">No slide images found. Run `node scripts/extract-pptx.js public/UHT_HUB_Pitch_Deck.pptx` to extract slides, or place exported images in `public/slides/`.</div>
        )}
      </div>
    </section>
  )
}
