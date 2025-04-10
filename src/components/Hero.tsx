
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-background z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center">
          {/* Video would replace this in a real implementation */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 z-10 flex flex-col items-center text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-gradient leading-tight tracking-tight">
            Crafting Visual Stories <br />That Captivate & Inspire
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300">
            Professional video editor with expertise in cinematic storytelling,
            motion graphics, and color grading for films, commercials, and digital content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://youtu.be/2AHmj5uLG0Q?si=2y2igTgSn4NWcA2b">
            <Button size="lg" className="gap-2">
              <PlayCircle className="w-5 h-5" /> Watch Showreel 
            </Button>
            </a>
            <Button variant="outline" size="lg" asChild>
              <a href="#work">Explore Styles</a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-float cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
