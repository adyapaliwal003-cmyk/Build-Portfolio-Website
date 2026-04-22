import { Card } from './ui/card';
import { Briefcase, ExternalLink } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: 'Katalisia',
      role: 'Product Intern',
      description: 'Worked on Katalisia, a content monetization platform, focusing on product analysis, user experience, and growth strategies. Analyzed YouTube API metrics, improved content engagement approaches, and contributed to feature thinking around personalized recommendations and in-content ads. Gained hands-on experience in product management, user research, and data-driven decision-making in a startup environment.',
      highlights: [
        'Analyzed YouTube API metrics for content optimization',
        'Improved content engagement strategies',
        'Contributed to personalized recommendation features',
        'Worked on in-content advertising solutions'
      ]
    },
    {
      company: 'Jet Setters',
      role: 'Product Intern',
      description: 'Worked on Jet Setters, focusing on product ideation, user experience, and market research. Contributed to designing features that enhance user engagement and streamline travel planning. Gained experience in understanding user needs, building intuitive solutions, and shaping product strategies in a fast-paced environment.',
      highlights: [
        'Led product ideation and user experience design',
        'Conducted market research for travel planning features',
        'Designed features to enhance user engagement',
        'Shaped product strategies in a fast-paced environment'
      ],
      prototypeLink: 'https://www.figma.com/proto/yKf5ppDaTnejYQ2iIrafuT/Jet-go-webiste?node-id=0-1&t=zYXaOdQI40XwkHlg-1'
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-[#FFF0F5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-black">Work Experience</h2>
        <div className="w-24 h-1 bg-[#FFB3C6] mx-auto mb-12"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 border-2 border-[#FFE5EC] hover:border-[#FFB3C6] transition-all hover:shadow-xl bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFB3C6] rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-black">{exp.role}</h3>
                      <p className="text-xl text-gray-700">{exp.company}</p>
                    </div>
                    {exp.prototypeLink && (
                      <a
                        href={exp.prototypeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-[#FF85A1] hover:text-black transition-colors"
                      >
                        View Prototype
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-[#FFB3C6] rounded-full mt-2"></span>
                        <p className="text-gray-700">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
