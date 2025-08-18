import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CustomButton } from "@/components/ui/custom-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, Calendar, MessageSquare, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be handled by Supabase backend integration
    console.log("Form submitted - Supabase backend integration needed");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Build Your AI Future
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business with intelligent automation? We're here to help.
              Get in touch for a free consultation and custom proposal.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">hello@myagentverse.com</p>
                      <p className="text-sm text-muted-foreground">We typically respond within 2 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM PST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Office</h3>
                      <p className="text-muted-foreground">123 AI Innovation Drive</p>
                      <p className="text-muted-foreground">San Francisco, CA 94107</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <div className="p-6 bg-card rounded-2xl border">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-semibold">Schedule a Call</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Book a 30-minute discovery call to discuss your AI automation needs.
                  </p>
                  <CustomButton variant="outline" size="sm" className="w-full">
                    Book Meeting
                  </CustomButton>
                </div>

                <div className="p-6 bg-card rounded-2xl border">
                  <div className="flex items-center mb-3">
                    <MessageSquare className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-semibold">Live Chat</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Chat with our team in real-time for quick questions.
                  </p>
                  <CustomButton variant="outline" size="sm" className="w-full">
                    Start Chat
                  </CustomButton>
                </div>

                <div className="p-6 bg-accent/10 rounded-2xl border border-accent/20">
                  <div className="flex items-center mb-3">
                    <Clock className="h-5 w-5 text-accent mr-2" />
                    <h3 className="font-semibold">Response Time</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Average response time: <span className="font-medium text-accent">Under 2 hours</span> during business hours
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-card rounded-2xl border overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Interactive Map</p>
                    <p className="text-xs text-muted-foreground">San Francisco Office</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-2xl border shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-2">
                        Budget Range
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1k">Under $1,000/month</SelectItem>
                          <SelectItem value="1k-5k">$1,000 - $5,000/month</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000/month</SelectItem>
                          <SelectItem value="over-10k">$10,000+/month</SelectItem>
                          <SelectItem value="not-sure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interest
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="What type of AI agent are you interested in?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="customer-support">Customer Support Agent</SelectItem>
                        <SelectItem value="sales-assistant">Sales Assistant</SelectItem>
                        <SelectItem value="data-research">Data Research Agent</SelectItem>
                        <SelectItem value="content-generator">Content Generator</SelectItem>
                        <SelectItem value="process-automation">Process Automation</SelectItem>
                        <SelectItem value="custom-solution">Custom Solution</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Description *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project, goals, and how we can help. The more details you provide, the better we can tailor our response to your needs."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="newsletter" className="rounded" />
                    <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                      I'd like to receive updates about AI trends and MyAgentVerse news
                    </label>
                  </div>
                  
                  <CustomButton type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </CustomButton>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy.
                    We'll respond within 2 business hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;