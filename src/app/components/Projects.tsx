import { Card } from './ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

export function Projects() {
  const projects = [
    {
      title: 'Smart HR Assistant',
      description: 'An intelligent HR management system that streamlines recruitment and employee management processes using AI-powered automation.',
      githubLink: 'https://github.com/adya007/smart-hr-assistant',
      tags: ['AI', 'HR Tech', 'Automation', 'Product Management'],
      role: 'Product Manager & Developer'
    },
    {
      title: 'Spendify',
      description: 'A comprehensive finance management mobile app that helps users track expenses, create budgets, and manage their financial health. Led team collaboration and interface development.',
      githubLink: 'https://github.com/Keshav1100/spendify',
      figmaLink: 'https://www.figma.com/proto/fzqpPTf1dJjFnRv6IgXrx0/Finance-Management-Mobile-App-UI-UX-Kit-for-Budget-Tracker-Financial-Prototype-Design--Community-?node-id=7020-3430&t=T928kD6yxTKgRBEe-1',
      tags: ['Finance', 'Mobile App', 'UI/UX', 'Team Collaboration'],
      role: 'Product Manager & Interface Developer',
      isGroupProject: true
    },
    {
      title: 'AI Nutrition Planner',
      description: 'Wellspring Diet - An AI-powered nutrition planning platform that provides personalized diet recommendations and meal planning.',
      liveLink: 'https://wellspring-diet.lovable.app',
      tags: ['AI', 'Health Tech', 'Nutrition', 'Web App'],
      role: 'Product Manager'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-black">Personal Projects</h2>
        <div className="w-24 h-1 bg-[#FFB3C6] mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 border-2 border-[#FFE5EC] hover:border-[#FFB3C6] transition-all hover:shadow-xl flex flex-col bg-white">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-black">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{project.role}</p>
                {project.isGroupProject && (
                  <span className="inline-block px-3 py-1 bg-[#FFE5EC] text-black rounded-full text-xs mb-3">
                    Group Project
                  </span>
                )}
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#FFF0F5] text-black text-xs rounded-full border border-[#FFB3C6]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full bg-black text-white hover:bg-gray-800 gap-2">
                      <Github className="w-4 h-4" />
                      GitHub
                    </Button>
                  </a>
                )}
                {project.figmaLink && (
                  <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full bg-[#FFB3C6] text-black hover:bg-[#FF85A1] gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Figma
                    </Button>
                  </a>
                )}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full bg-[#FFB3C6] text-black hover:bg-[#FF85A1] gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
