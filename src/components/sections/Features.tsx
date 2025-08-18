import { Bot, DollarSign, Zap, Shield, Headphones, BarChart } from "lucide-react";

const features = [
  {
    name: "Custom AI Agents",
    description: "Tailored AI solutions designed specifically for your business needs and workflows.",
    icon: Bot,
  },
  {
    name: "Affordable Pricing",
    description: "Competitive pricing plans that scale with your business growth and requirements.",
    icon: DollarSign,
  },
  {
    name: "Fast Delivery",
    description: "Quick turnaround times to get your AI agents up and running in days, not months.",
    icon: Zap,
  },
  {
    name: "Enterprise Security",
    description: "Bank-level security and compliance to protect your sensitive business data.",
    icon: Shield,
  },
  {
    name: "24/7 Support",
    description: "Round-the-clock technical support to ensure your AI agents perform optimally.",
    icon: Headphones,
  },
  {
    name: "Performance Analytics",
    description: "Detailed insights and metrics to track your AI agents' performance and ROI.",
    icon: BarChart,
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose MyAgentVerse?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge AI technology with deep business expertise to deliver
            exceptional results for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="group relative p-6 rounded-2xl bg-card border hover:shadow-lg transition-all duration-300 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;