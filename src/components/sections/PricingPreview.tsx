import { CustomButton } from "@/components/ui/custom-button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "main",
    price: 4999,
    period: "year",
    description: "Ideal for growing businesses with multiple needs",
    features: [
      "1 Custom AI Agents",
      "Advanced Integration",
      "Priority Support",
      "3 Revisions",
      "Advanced Analytics",
    ],
    cta: "Start main",
    popular: true,
  },
];

const PricingPreview = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Choose the perfect plan for your business. All plans include our core
          AI development services with varying levels of support and customization.
        </p>

        {/* Centered Single Card */}
        <div className="flex justify-center">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border bg-card hover-lift animate-slide-up max-w-sm w-full ${
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
                  <span className="text-muted-foreground ml-1">
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 text-left">
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

        {/* Extra button under card */}
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
