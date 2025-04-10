
import { Film } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Film className="h-6 w-6 text-editor-purple" />
            <span className="text-xl font-display font-bold">EditMaster</span>
          </div>
          <p className="text-gray-400 text-center max-w-md">
            Professional video editing services for creators, businesses, and productions seeking high-quality visual content.
          </p>
        </div>

        <div className="flex justify-center space-x-8 mb-8">
          <a href="#work" className="text-gray-400 hover:text-editor-purple transition-colors">Work</a>
          <a href="#about" className="text-gray-400 hover:text-editor-purple transition-colors">About</a>
          <a href="#services" className="text-gray-400 hover:text-editor-purple transition-colors">Services</a>
          <a href="#contact" className="text-gray-400 hover:text-editor-purple transition-colors">Contact</a>
        </div>

        <div className="border-t border-zinc-900 pt-8">
          <p className="text-gray-500 text-center text-sm">
            &copy; {currentYear} EditMaster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
