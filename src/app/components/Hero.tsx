import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#FFF0F5] to-[#FFE5EC] px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FFB3C6] to-[#FF85A1] flex items-center justify-center">
            <span className="text-5xl text-white font-bold">AP</span>
          </div>
          <h1 className="text-6xl font-bold mb-4 text-black">Adya Paliwal</h1>
          <h2 className="text-3xl text-gray-700 mb-6">Aspiring Product Manager</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Passionate about building user-centric products that solve real problems.
            Experienced in product analysis, user research, and data-driven decision-making.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a href="mailto:adyapaliwal007@gmail.com">
            <Button className="bg-black text-white hover:bg-gray-800 gap-2">
              <Mail className="w-4 h-4" />
              Email
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/adya-paliwal-287655280/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#FFB3C6] text-black hover:bg-[#FF85A1] gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/adya007" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-black border-2 border-black hover:bg-[#FFF0F5] gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+91 7520150859</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
