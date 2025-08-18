import { CustomButton } from "@/components/ui/custom-button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: 99,
    period: "month",
    description: "Perfect for small businesses getting started with AI",
    features: [
      "1 Custom AI Agent",
      "Basic Integration",
      "Email Support",
      "1 Revision",
      "Basic Analytics",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: 299,
    period: "month",
    description: "Ideal for growing businesses with multiple needs",
    features: [
      "3 Custom AI Agents",
      "Advanced Integration",
      "Priority Support",
      "3 Revisions",
      "Advanced Analytics",
      "API Access",
    ],
    cta: "Start Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 799,
    period: "month",
    description: "For large organizations with complex requirements",
    features: [
      "Unlimited AI Agents",
      "Custom Integration",
      "24/7 Dedicated Support",
      "Unlimited Revisions",
      "Custom Analytics",
      "White-label Solutions",
      "On-premise Deployment",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingPreview = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include our core AI development
            services with varying levels of support and customization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border bg-card hover-lift animate-slide-up ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-border"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground ml-1">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <CustomButton 
                asChild 
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                <Link to="/pricing">{plan.cta}</Link>
              </CustomButton>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <CustomButton asChild variant="outline" size="lg">
            <Link to="/pricing">View All Plans & Features</Link>
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;