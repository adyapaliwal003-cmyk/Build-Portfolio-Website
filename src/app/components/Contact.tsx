import { Card } from './ui/card';
import { Mail, Phone, Linkedin, Github, MapPin, Download } from 'lucide-react';
import { Button } from './ui/button';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'adyapaliwal007@gmail.com',
      link: 'mailto:adyapaliwal007@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7520150859',
      link: 'tel:+917520150859'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'adya-paliwal',
      link: 'https://www.linkedin.com/in/adya-paliwal-287655280/'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'adya007',
      link: 'https://github.com/adya007'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-[#FFF0F5] via-[#FFE5EC] to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-black">Get In Touch</h2>
        <div className="w-24 h-1 bg-[#FFB3C6] mx-auto mb-6"></div>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing product management opportunities, collaborations, or just having a chat about building great products. Feel free to reach out!
        </p>

        <Card className="p-8 border-2 border-[#FFE5EC] bg-white shadow-xl mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-[#FFF0F5] border border-[#FFE5EC] hover:border-[#FFB3C6] transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFB3C6] to-[#FF85A1] rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{item.label}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-[#FF85A1] transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-black font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <div className="text-center">
          <a
            href="https://drive.google.com/file/d/1Hf8rPeuQeKzU5ZUyZdBSmlnfit7a8ZKf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-black text-white hover:bg-gray-800 gap-2 text-lg px-8 py-6">
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
