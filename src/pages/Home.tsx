import React from 'react'
import SlidesGallery from '../components/SlidesGallery'

function Hero(){
  return (
    <section id="home" className="bg-gradient-to-r from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-uht-blue">UHT Hub — Build Skills. Launch Careers.</h1>
          <p className="mt-6 text-gray-700">Practical technology training and coworking for young people and professionals in Nigeria. Learn in-demand skills, build real projects, and gain access to a productive workspace.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#courses" className="cta text-center">Explore Courses</a>
            <a href="#contact" className="cta-outline text-center">Register Now</a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="bg-white rounded-lg shadow p-6 max-w-md">
            <h3 className="font-semibold">Upcoming: Full-Stack Bootcamp</h3>
            <p className="mt-2 text-sm text-gray-600">12-week intensive program combining Web Development, UI/UX fundamentals and industry-ready projects. Starts: Oct 12.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Courses(){
  const items = [
    {title: 'Web Development', desc: 'HTML, CSS, JavaScript, React and backend fundamentals to build production-ready web apps.'},
    {title: 'Data Analytics', desc: 'Data cleaning, visualization, SQL, and Python tools to turn data into decisions.'},
    {title: 'UI/UX Design', desc: 'User research, wireframing, Figma, and usability testing for human-centered interfaces.'},
    {title: 'Digital Marketing', desc: 'SEO, content strategy, social media and analytics to grow tech products and services.'}
  ]

  return (
    <section id="courses" className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <h2 className="text-2xl font-bold text-uht-blue">Courses</h2>
      <p className="mt-2 text-gray-700">Hands-on programs designed to get you job-ready and project-competent.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {items.map((c) => (
          <div key={c.title} className="border rounded-lg p-6">
            <h3 className="font-semibold text-lg">{c.title}</h3>
            <p className="mt-2 text-gray-600">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function WhyChoose(){
  return (
    <section id="about" className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold text-uht-blue">Why Choose UHT Hub</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-white rounded shadow">
            <h4 className="font-semibold">Practical Curriculum</h4>
            <p className="mt-2 text-gray-600">Curricula focused on real-world projects and tools used by employers.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h4 className="font-semibold">Experienced Mentors</h4>
            <p className="mt-2 text-gray-600">Instructors with industry experience and a track record of mentoring juniors to success.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h4 className="font-semibold">Supportive Community</h4>
            <p className="mt-2 text-gray-600">A collaborative learning environment, networking events, and peer review sessions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pricing(){
  const plans = [
    {name: 'Short Course', price: '₦40,000', desc: '4-week focused workshops for practical skills.'},
    {name: 'Bootcamp', price: '₦150,000', desc: '12-week full-time immersive program with projects.'},
    {name: 'Corporate Training', price: 'Custom', desc: 'Tailored training packages for teams and organisations.'}
  ]

  return (
    <section id="pricing" className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <h2 className="text-2xl font-bold text-uht-blue">Pricing</h2>
      <p className="mt-2 text-gray-700">Transparent pricing to suit learners and organisations.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {plans.map(p => (
          <div key={p.name} className="border rounded-lg p-6">
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <div className="mt-2 text-2xl font-bold">{p.price}</div>
            <p className="mt-2 text-gray-600">{p.desc}</p>
            <a href="#contact" className="inline-block mt-4 bg-uht-blue text-white px-4 py-2 rounded">Get Started</a>
          </div>
        ))}
      </div>
    </section>
  )
}

function Coworking(){
  return (
    <section id="coworking" className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold text-uht-blue">Coworking</h2>
        <p className="mt-2 text-gray-700">Access quiet workstations, fast internet, meeting rooms and a community of creators. Flexible day passes and monthly plans available to support freelancers and startups.</p>
      </div>
    </section>
  )
}

function Contact(){
  return (
    <section id="contact" className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6 md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-uht-blue">Get Started</h2>
          <p className="mt-2 text-gray-700">Register for a course or book a coworking trial. Our team will reach out with next steps.</p>
        </div>
        <div className="mt-6 md:mt-0">
          <a href="mailto:hello@uhthub.ng" className="bg-uht-accent text-white px-6 py-3 rounded">Contact Us</a>
        </div>
      </div>
    </section>
  )
}

export default function Home(){
  return (
    <div>
      <Hero />
      <Courses />
      <WhyChoose />
      <Pricing />
      {/* Slides / Pitch Deck gallery */}
      <SlidesGallery />
      <Coworking />
      <Contact />
    </div>
  )
}
