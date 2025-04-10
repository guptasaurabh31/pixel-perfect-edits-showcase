
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
            I'm an aspiring video editor passionate about storytelling through visuals, rhythm, and sound. As I begin my journey in the creative world, I'm actively exploring editing styles, transitions, motion graphics, and effects to develop a unique editing voice.


            </p>
            <p className="text-gray-300 mb-8">
            Though I’m at the early stage of my career, I’m constantly learning through real-world practice, tutorials, and creative challenges. I’ve created a variety of demo videos and animated texts, and I'm building a showreel that reflects the kind of work I’m capable of producing — from fast-paced transitions to cinematic effects. <br />

I believe in growth through collaboration and consistency. I'm always open to new opportunities, feedback, and projects that help me level up and bring ideas to life.
            </p>

            {/* Skills and Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="p-3 rounded-md bg-editor-purple/20 mr-4">
                  <Film className="h-5 w-5 text-editor-purple" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Motion Graphics</h3>
                  <p className="text-sm text-gray-400">
                  Crafting dynamic animations and text reveals
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 rounded-md bg-editor-purple/20 mr-4">
                  <MonitorPlay className="h-5 w-5 text-editor-purple" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Cinematic Transitions</h3>
                  <p className="text-sm text-gray-400">
                  Using speed ramps, zooms, and match cuts
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 rounded-md bg-editor-purple/20 mr-4">
                  <Award className="h-5 w-5 text-editor-purple" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Sound Design</h3>
                  <p className="text-sm text-gray-400">
                  Adding impact with SFX and music sync
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 rounded-md bg-editor-purple/20 mr-4">
                  <Users className="h-5 w-5 text-editor-purple" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Color Isolation & Grading</h3>
                  <p className="text-sm text-gray-400">
                  Creating mood through color
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Stats Block */}
            <div className="grid grid-cols-2 gap-6 mt-10 lg:hidden">
              <div className="text-center p-4 glass-card">
                <div className="text-3xl font-bold text-editor-purple mb-1">Intermidiate</div>
                <div className="text-sm text-gray-300">Level Experience</div>
              </div>
              <div className="text-center p-4 glass-card">
                <div className="text-3xl font-bold text-editor-purple mb-1">10+</div>
                <div className="text-sm text-gray-300">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
