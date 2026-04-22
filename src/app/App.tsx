import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Thinking } from './components/Thinking';
import { Assignments } from './components/Assignments';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main id="home">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Assignments />
        <Certificates />
        <Thinking />
        <Contact />
      </main>
      <footer className="bg-black text-white py-8 text-center">
        <p className="text-sm">
          © 2026 Adya Paliwal. Built with passion for great products.
        </p>
      </footer>
    </div>
  );
}