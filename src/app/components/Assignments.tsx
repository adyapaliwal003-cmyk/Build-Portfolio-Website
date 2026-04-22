import { Card } from './ui/card';
import { FileText, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export function Assignments() {
  const assignments = [
    {
      title: 'Product Management Case Study',
      description: 'Comprehensive product analysis and strategy document showcasing product thinking, market research, and feature prioritization frameworks.',
      link: 'https://drive.google.com/file/d/1nG10dzibZc7hcPVDRYTJjaD0bDhC9qpl/view?usp=sharing',
      type: 'Case Study',
      skills: ['Product Strategy', 'Market Analysis', 'Feature Prioritization']
    }
  ];

  return (
    <section id="assignments" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-black">PM Assignments</h2>
        <div className="w-24 h-1 bg-[#FFB3C6] mx-auto mb-12"></div>

        <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
          {assignments.map((assignment, index) => (
            <Card key={index} className="p-8 border-2 border-[#FFE5EC] hover:border-[#FFB3C6] transition-all hover:shadow-xl bg-white">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#FFB3C6] rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-semibold text-black">{assignment.title}</h3>
                      <span className="inline-block mt-2 px-3 py-1 bg-[#FFF0F5] text-black text-sm rounded-full border border-[#FFB3C6]">
                        {assignment.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{assignment.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {assignment.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-[#FFE5EC] text-black text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a href={assignment.link} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-black text-white hover:bg-gray-800 gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Assignment
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
