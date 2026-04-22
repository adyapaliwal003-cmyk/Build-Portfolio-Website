import { Card } from './ui/card';
import { Lightbulb, Target, Users, BarChart, Rocket, Heart } from 'lucide-react';

export function Thinking() {
  const principles = [
    {
      icon: Users,
      title: 'User-Centric Approach',
      description: 'I believe in putting users at the heart of every product decision. Understanding their pain points, needs, and behaviors drives meaningful innovation.'
    },
    {
      icon: BarChart,
      title: 'Data-Driven Decisions',
      description: 'Combining qualitative insights with quantitative data helps validate assumptions and measure success. Metrics guide the way, but empathy shows the path.'
    },
    {
      icon: Target,
      title: 'Problem-First Thinking',
      description: 'Before jumping to solutions, I focus on deeply understanding the problem. The best products solve real problems elegantly and efficiently.'
    },
    {
      icon: Rocket,
      title: 'Iterative Development',
      description: 'Build, measure, learn, repeat. I embrace an iterative approach that allows for continuous improvement and adaptation based on user feedback.'
    },
    {
      icon: Lightbulb,
      title: 'Strategic Innovation',
      description: 'Innovation should align with business goals. I strive to balance creative thinking with strategic objectives to deliver impactful results.'
    },
    {
      icon: Heart,
      title: 'Collaborative Spirit',
      description: 'Great products are built by great teams. I value collaboration, open communication, and creating an environment where everyone\'s ideas matter.'
    }
  ];

  return (
    <section id="thinking" className="py-20 px-6 bg-[#FFF0F5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-black">How I Think About Products</h2>
        <div className="w-24 h-1 bg-[#FFB3C6] mx-auto mb-6"></div>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          My product philosophy is grounded in empathy, data, and continuous learning.
          Here are the core principles that guide my approach to product management.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Card key={index} className="p-6 border-2 border-[#FFE5EC] hover:border-[#FFB3C6] transition-all hover:shadow-xl bg-white">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FFB3C6] to-[#FF85A1] rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
