import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CustomButton } from "@/components/ui/custom-button";
import { Check, X } from "lucide-react";

const pricingPlans = [
  {
    name: "Pro",
    price: { yearly: 4999 },
    description: "Ideal for growing businesses with multiple automation needs",
    features: [
      "1 Custom AI Agent",
      "Advanced Integration",
      "Priority Support",
      "3 Revisions Included",
      "Advanced Analytics",
    ],
    limitations: ["White-label solutions", "On-premise deployment"],
    cta: "Start Pro",
    popular: true,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business. All plans include our core AI development
              services with varying levels of support and customization.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl border bg-card hover-lift animate-slide-up ${
                  plan.popular
                    ? "border-primary shadow-xl scale-105 ring-2 ring-primary/20"
                    : "border-border shadow-lg"
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
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold">${plan.price.yearly}</span>
                    <span className="text-muted-foreground ml-2">/year</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ${Math.round(plan.price.yearly / 12)} per month, billed annually
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-semibold mb-4 text-muted-foreground">
                        Not included:
                      </h4>
                      <ul className="space-y-3">
                        {plan.limitations.map((limitation) => (
                          <li key={limitation} className="flex items-center">
                            <X className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <CustomButton
                  asChild
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  <a href="/contact">{plan.cta}</a>
                </CustomButton>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join hundreds of businesses already using AI agents to automate workflows,
              improve efficiency, and drive growth.
            </p>
            <CustomButton asChild variant="hero" size="xl">
              <a href="/contact">Start Your AI Journey</a>
            </CustomButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
