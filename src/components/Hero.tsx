import React from 'react'

function Hero() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet Bailey: The Happiest Bulldog on Earth</h1>
        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed mb-8">
          Bringing joy and slobbery kisses to everyone he meets. Learn about Bailey's favorite activities, how he became an internet sensation, and how to adopt a bulldog like him.
        </p>
        <div className="flex space-x-4">
          <a href="#learn-more" className="bg-blue-700 hover:bg-blue-800 px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300">Learn More About Bailey</a>
          <a href="#adopt" className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 rounded-xl text-lg transition-all duration-300" aria-label="Adopt Bailey">Adopt a Bulldog</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
