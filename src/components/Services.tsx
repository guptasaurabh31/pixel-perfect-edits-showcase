
import { 
  Film, 
  PenTool, 
  Music, 
  PaintBucket, 
  Layers, 
  Video
} from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Video Editing",
    description: "Professional editing for films, commercials, music videos and documentaries with a focus on storytelling and rhythm."
  },
  {
    icon: PenTool,
    title: "Motion Graphics",
    description: "Custom animated elements, titles, and graphics that elevate your video content and reinforce your brand."
  },
  {
    icon: Music,
    title: "Sound Design",
    description: "Expert audio mixing, sound effects, and music selection to create the perfect auditory experience."
  },
  {
    icon: PaintBucket,
    title: "Color Grading",
    description: "Enhance the visual appeal of your footage with professional color correction and stylistic color grading."
  },
  {
    icon: Layers,
    title: "Visual Effects",
    description: "From simple clean-up to complex compositing, adding that extra visual impact to your projects."
  },
  {
    icon: Video,
    title: "Content Strategy",
    description: "Consultation on video content strategy to maximize engagement and achieve your communication goals."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple">
            Services & Expertise
          </h2>
          <p className="text-gray-300">
            I offer a comprehensive range of video editing and post-production services,
            tailored to meet your specific project needs and creative vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-8 transition-all duration-300 hover:border-editor-purple/50 group"
            >
              <div className="p-4 rounded-xl bg-editor-purple/20 inline-block mb-5">
                <service.icon className="h-7 w-7 text-editor-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-editor-purple transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
