import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CustomButton } from "@/components/ui/custom-button";
import { Target, Users, Award, Zap } from "lucide-react";

const values = [
  {
    name: "Innovation First",
    description: "We stay at the forefront of AI technology to deliver cutting-edge solutions that give our clients a competitive advantage.",
    icon: Zap,
  },
  {
    name: "Client Success",
    description: "Your success is our success. We measure our achievements by the tangible results our AI agents deliver for your business.",
    icon: Target,
  },
  {
    name: "Transparency",
    description: "We believe in clear communication, honest pricing, and transparent processes throughout every project.",
    icon: Award,
  },
  {
    name: "Collaboration",
    description: "We work as an extension of your team, combining our AI expertise with your business knowledge.",
    icon: Users,
  },
];

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    bio: "Former AI research lead at Google with 10+ years in machine learning and business automation.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Sarah Martinez",
    role: "CTO",
    bio: "Ex-Microsoft AI architect specializing in enterprise-scale deployment and system integration.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "David Park",
    role: "Head of AI Development",
    bio: "PhD in Computer Science with expertise in natural language processing and conversational AI.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Customer Success",
    bio: "Business strategy expert focused on ensuring client AI implementations drive measurable ROI.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About MyAgentVerse
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to democratize AI technology and make intelligent automation 
              accessible to businesses of all sizes. Founded by AI experts from leading tech companies, 
              we combine deep technical expertise with real-world business experience.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="mb-6">
                  MyAgentVerse was born from a simple observation: while AI technology was advancing rapidly, 
                  most businesses were struggling to implement it effectively. Traditional AI solutions were 
                  either too complex, too expensive, or too generic to deliver real value.
                </p>
                <p className="mb-6">
                  In 2023, our founders came together with a shared vision: to bridge the gap between 
                  cutting-edge AI capabilities and practical business applications. We believed that every 
                  business should have access to custom AI agents that understand their unique needs and workflows.
                </p>
                <p className="mb-6">
                  Today, we've helped hundreds of businesses automate their operations, improve customer 
                  experiences, and drive growth through intelligent AI agents. Our approach combines the 
                  latest in machine learning with deep business expertise to deliver solutions that truly 
                  make a difference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  To make AI automation accessible, affordable, and actionable for businesses worldwide. 
                  We believe that intelligent automation should enhance human potential, not replace it.
                </p>
                <div className="bg-card p-6 rounded-2xl border">
                  <h3 className="font-semibold mb-3">What drives us:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Empowering businesses to focus on what matters most</li>
                    <li>• Creating AI that understands context and nuance</li>
                    <li>• Building long-term partnerships with our clients</li>
                    <li>• Contributing to a more efficient and innovative economy</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  A world where every business has access to intelligent automation that helps them 
                  work smarter, serve customers better, and achieve their full potential.
                </p>
                <div className="bg-card p-6 rounded-2xl border">
                  <h3 className="font-semibold mb-3">We envision:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• AI agents as trusted business partners</li>
                    <li>• Seamless integration between human and artificial intelligence</li>
                    <li>• Democratized access to enterprise-grade AI technology</li>
                    <li>• A future where tedious tasks are automated</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do and every decision we make.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.name}
                  className="text-center p-6 rounded-2xl bg-card border hover:shadow-lg transition-all duration-300 hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.name}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                AI experts, business strategists, and customer success specialists working 
                together to deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="text-center group animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-2xl object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how our AI expertise can help transform your business operations
              and drive meaningful results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomButton asChild variant="hero" size="xl">
                <a href="/contact">Start Your Project</a>
              </CustomButton>
              <CustomButton asChild variant="outline" size="xl">
                <a href="/services">Explore Services</a>
              </CustomButton>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;