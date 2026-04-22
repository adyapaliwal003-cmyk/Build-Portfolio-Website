import { Card } from './ui/card';

export function Skills() {
  const skillCategories = [
    {
      category: 'Product Management',
      skills: ['Product Strategy', 'User Research', 'Data Analysis', 'A/B Testing', 'Product Roadmapping', 'Stakeholder Management']
    },
    {
      category: 'Technical Skills',
      skills: ['SQL', 'Python', 'Figma', 'Jira', 'Google Analytics', 'API Integration']
    },
    {
      category: 'Design & UX',
      skills: ['UI/UX Design', 'Wireframing', 'Prototyping', 'User Testing', 'Design Systems']
    },
    {
      category: 'Soft Skills',
      skills: ['Team Collaboration', 'Communication', 'Problem Solving', 'Agile Methodology', 'Leadership']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-black">Skills</h2>
        <div className="w-24 h-1 bg-[#FFB3C6] mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 border-2 border-[#FFE5EC] hover:border-[#FFB3C6] transition-all hover:shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-[#FFF0F5] text-black rounded-full border border-[#FFB3C6] hover:bg-[#FFE5EC] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
