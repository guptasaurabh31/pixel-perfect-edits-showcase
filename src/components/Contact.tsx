
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple">
              Get in Touch
            </h2>
            <p className="text-gray-300 mb-8">
              Interested in working together? Have a project in mind? Feel free to reach out
              and let's create something amazing together.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="p-3 rounded-md bg-editor-purple/20 mr-4">
                  <Mail className="h-5 w-5 text-editor-purple" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <a href="mailto:contact@editmaster.com" className="text-gray-400 hover:text-editor-purple">
                    guptasaurabh.3110@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 rounded-md bg-editor-purple/20 mr-4">
                  <Phone className="h-5 w-5 text-editor-purple" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-editor-purple">
                    +91 9870006234
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 rounded-md bg-editor-purple/20 mr-4">
                  <MapPin className="h-5 w-5 text-editor-purple" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Location</h3>
                  <p className="text-gray-400">Gujarat,India</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-bold mb-4">Connect with me</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="p-3 rounded-full bg-editor-purple/20 hover:bg-editor-purple/30 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-editor-purple" />
                </a>
                <a 
                  href="#" 
                  className="p-3 rounded-full bg-editor-purple/20 hover:bg-editor-purple/30 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-editor-purple" />
                </a>
                <a 
                  href="#" 
                  className="p-3 rounded-full bg-editor-purple/20 hover:bg-editor-purple/30 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5 text-editor-purple" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-zinc-800/50 border-zinc-700"
                />
              </div>
              <div>
                <Input
                  placeholder="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-zinc-800/50 border-zinc-700"
                />
              </div>
              <div>
                <Input
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-zinc-800/50 border-zinc-700"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-zinc-800/50 border-zinc-700 min-h-32"
                />
              </div>
              <Button type="submit" className="w-full gap-2" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
