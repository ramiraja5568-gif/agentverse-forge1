import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CustomButton } from "@/components/ui/custom-button";
import { Bot, MessageSquare, BarChart, FileText, Users, Zap } from "lucide-react";

const services = [
  {
    name: "Customer Support Agent",
    description: "24/7 AI-powered customer support that handles inquiries, resolves issues, and escalates complex problems to human agents.",
    features: [
      "Multi-channel support (chat, email, social)",
      "Natural language understanding",
      "Knowledge base integration",
      "Sentiment analysis",
      "Automated ticket routing"
    ],
    icon: MessageSquare,
    price: "Starting at $199/month",
  },
  {
    name: "Sales Assistant",
    description: "Intelligent sales agent that qualifies leads, schedules meetings, and nurtures prospects through your sales funnel.",
    features: [
      "Lead qualification automation",
      "Meeting scheduling",
      "Follow-up sequences",
      "CRM integration",
      "Performance analytics"
    ],
    icon: Users,
    price: "Starting at $299/month",
  },
  {
    name: "Data Research Agent",
    description: "Powerful research assistant that gathers, analyzes, and reports on market data, competitor intelligence, and trends.",
    features: [
      "Web scraping & data collection",
      "Competitive analysis",
      "Market research reports",
      "Real-time monitoring",
      "Custom dashboards"
    ],
    icon: BarChart,
    price: "Starting at $399/month",
  },
  {
    name: "Content Generator",
    description: "Creative AI that produces high-quality content for blogs, social media, marketing campaigns, and documentation.",
    features: [
      "Blog post generation",
      "Social media content",
      "Marketing copy",
      "SEO optimization",
      "Brand voice consistency"
    ],
    icon: FileText,
    price: "Starting at $249/month",
  },
  {
    name: "Process Automation Agent",
    description: "Workflow automation specialist that streamlines repetitive tasks and integrates with your existing tools.",
    features: [
      "Workflow automation",
      "System integrations",
      "Document processing",
      "Email automation",
      "Task management"
    ],
    icon: Zap,
    price: "Starting at $349/month",
  },
  {
    name: "Personal AI Assistant",
    description: "Dedicated AI assistant that manages schedules, handles communications, and provides executive support.",
    features: [
      "Calendar management",
      "Email prioritization",
      "Task organization",
      "Meeting preparation",
      "Travel coordination"
    ],
    icon: Bot,
    price: "Starting at $449/month",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Agent Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of AI agents designed to automate your business
              processes and accelerate growth. Each solution is customized to your specific needs.
            </p>
            <CustomButton asChild variant="hero" size="xl">
              <a href="/contact">Get Custom Quote</a>
            </CustomButton>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.name}
                  className="group p-8 rounded-2xl bg-card border hover:shadow-xl transition-all duration-300 hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t pt-6">
                    <p className="text-lg font-semibold text-primary mb-4">{service.price}</p>
                    <CustomButton variant="outline" size="lg" className="w-full">
                      Learn More
                    </CustomButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Don't see exactly what you need? We create fully custom AI agents tailored
              to your unique business requirements and workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomButton asChild variant="hero" size="xl">
                <a href="/contact">Request Custom Solution</a>
              </CustomButton>
              <CustomButton asChild variant="outline" size="xl">
                <a href="/pricing">View All Pricing</a>
              </CustomButton>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;