import { CustomButton } from "@/components/ui/custom-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPreview = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be handled by Supabase backend later
    console.log("Form submitted - backend integration needed");
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how AI agents can transform your business. Get a free consultation
            and custom proposal tailored to your needs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">hello@myagentverse.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <h4 className="font-semibold mb-2">Free Consultation</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Book a 30-minute discovery call to discuss your AI automation needs.
              </p>
              <CustomButton asChild variant="outline" size="sm">
                <Link to="/contact">Schedule Call</Link>
              </CustomButton>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl border shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone (Optional)
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project and how we can help..."
                  rows={4}
                  required
                />
              </div>
              
              <CustomButton type="submit" variant="hero" size="lg" className="w-full">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </CustomButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;