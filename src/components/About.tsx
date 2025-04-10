
import { Award, Users, Film, MonitorPlay } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="Video Editor at Work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 p-6 glass-card hidden lg:block">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-editor-purple mb-1">8+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-editor-purple mb-1">150+</div>
                  <div className="text-sm text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-editor-purple mb-1">12</div>
                  <div className="text-sm text-gray-300">Industry Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-editor-purple mb-1">35+</div>
                  <div className="text-sm text-gray-300">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple">
              About Me
            </h2>
            <p className="text-gray-300 mb-6">
              I'm a passionate and experienced video editor with a keen eye for visual storytelling and rhythm. 
              With over 8 years in the industry, I've worked across multiple formats including feature films, 
              commercials, documentaries, and digital content.
            </p>
            <p className="text-gray-300 mb-8">
              My approach combines technical expertise with creative intuition, allowing me to craft 
              compelling narratives that resonate with audiences. I believe in the power of collaboration 
              and work closely with directors and producers to realize their vision while adding my own 
              creative perspective.
            </p>

            {/* Skills and Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="p-3 rounded-md bg-editor-purple/20 mr-4">
                  <Film className="h-5 w-5 text-editor-purple" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Narrative Editing</h3>
                  <p className="text-sm text-gray-400">
                    Crafting compelling stories that engage and captivate audiences
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 rounded-md bg-editor-purple/20 mr-4">
                  <MonitorPlay className="h-5 w-5 text-editor-purple" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Visual Effects</h3>
                  <p className="text-sm text-gray-400">
                    Creating stunning visuals that enhance the storytelling experience
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 rounded-md bg-editor-purple/20 mr-4">
                  <Award className="h-5 w-5 text-editor-purple" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Award Winning</h3>
                  <p className="text-sm text-gray-400">
                    Recognized with multiple industry awards for editing excellence
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 rounded-md bg-editor-purple/20 mr-4">
                  <Users className="h-5 w-5 text-editor-purple" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Collaborative</h3>
                  <p className="text-sm text-gray-400">
                    Working closely with teams to achieve shared creative vision
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Stats Block */}
            <div className="grid grid-cols-2 gap-6 mt-10 lg:hidden">
              <div className="text-center p-4 glass-card">
                <div className="text-3xl font-bold text-editor-purple mb-1">8+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-4 glass-card">
                <div className="text-3xl font-bold text-editor-purple mb-1">150+</div>
                <div className="text-sm text-gray-300">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
