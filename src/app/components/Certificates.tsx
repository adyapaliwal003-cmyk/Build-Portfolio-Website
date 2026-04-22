import { Card } from './ui/card';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export function Certificates() {
  return (
    <section id="certificates" className="py-20 px-6 bg-[#FFF0F5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-black">Certifications</h2>
        <div className="w-24 h-1 bg-[#FFB3C6] mx-auto mb-12"></div>

        <Card className="p-8 border-2 border-[#FFE5EC] hover:border-[#FFB3C6] transition-all hover:shadow-xl bg-white max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#FFB3C6] to-[#FF85A1] rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-black mb-3">Professional Certifications</h3>
              <p className="text-gray-600 mb-6">
                I've completed various certifications in Product Management, UX Design, and related fields
                to continuously enhance my skills and stay updated with industry best practices.
              </p>
              <a
                href="https://drive.google.com/drive/folders/1Uwwk2diQvF_fU4aytlBYDmQaNTNsUcBO?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-black text-white hover:bg-gray-800 gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View All Certificates
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
