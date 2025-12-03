import React from 'react'
import { Zap, Shield, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Unmatched Cuteness', // Specific and benefit-driven
    description: 'Bailey melts hearts with his wrinkly face and playful antics. Prepare for an overload of adorableness!',
  },
  {
    icon: Shield,
    title: 'Loyal Companion', // Specific and benefit-driven
    description: 'Bulldogs are known for their unwavering loyalty. Bailey will be your steadfast friend through thick and thin.',
  },
  {
    icon: TrendingUp,
    title: 'Internet Sensation', // Specific and benefit-driven
    description: 'Follow Bailey adventures on instagram! See what new things he is doing!',
  },
]

function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Bailey's Best Qualities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
