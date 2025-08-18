import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CustomButton } from "@/components/ui/custom-button";
import { Check, X } from "lucide-react";
import { useState } from "react";

const pricingPlans = [
  {
    name: "Starter",
    price: { monthly: 99, yearly: 999 },
    description: "Perfect for small businesses getting started with AI automation",
    features: [
      "1 Custom AI Agent",
      "Basic Integration",
      "Email Support",
      "1 Revision Included",
      "Basic Analytics Dashboard",
      "5GB Data Storage",
      "Standard Response Time",
    ],
    limitations: [
      "Advanced integrations",
      "24/7 Support",
      "Custom branding",
      "API access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: { monthly: 299, yearly: 2999 },
    description: "Ideal for growing businesses with multiple automation needs",
    features: [
      "3 Custom AI Agents",
      "Advanced Integration",
      "Priority Support",
      "3 Revisions Included",
      "Advanced Analytics",
      "25GB Data Storage",
      "API Access",
      "Custom Workflows",
      "Multi-channel Support",
    ],
    limitations: [
      "White-label solutions",
      "On-premise deployment",
    ],
    cta: "Start Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 799, yearly: 7999 },
    description: "For large organizations with complex requirements",
    features: [
      "Unlimited AI Agents",
      "Custom Integration",
      "24/7 Dedicated Support",
      "Unlimited Revisions",
      "Custom Analytics Dashboard",
      "Unlimited Data Storage",
      "Full API Access",
      "White-label Solutions",
      "On-premise Deployment",
      "SLA Guarantee",
      "Dedicated Account Manager",
      "Custom Training",
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

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
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-3 ${!isYearly ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isYearly ? 'bg-primary' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearly ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-3 ${isYearly ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                Yearly
              </span>
              {isYearly && (
                <span className="ml-2 bg-accent text-accent-foreground px-2 py-1 rounded-full text-sm font-medium">
                  Save 15%
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                      <span className="text-5xl font-bold">
                        ${isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-muted-foreground ml-2">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                    {isYearly && (
                      <p className="text-sm text-muted-foreground">
                        ${Math.round(plan.price.yearly / 12)} per month, billed annually
                      </p>
                    )}
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
                        <h4 className="font-semibold mb-4 text-muted-foreground">Not included:</h4>
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
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">How quickly can I get started?</h3>
                  <p className="text-muted-foreground text-sm">
                    Most AI agents are deployed within 1-2 weeks of project kickoff, 
                    depending on complexity and integration requirements.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, you can change your plan at any time. Upgrades take effect immediately, 
                    and downgrades take effect at your next billing cycle.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">What kind of support do you offer?</h3>
                  <p className="text-muted-foreground text-sm">
                    All plans include technical support. Pro and Enterprise plans get priority 
                    support with faster response times and dedicated account management.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Do you offer custom solutions?</h3>
                  <p className="text-muted-foreground text-sm">
                    Absolutely! All our AI agents are customized to your specific business needs. 
                    Enterprise clients can get fully bespoke solutions.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Is there a setup fee?</h3>
                  <p className="text-muted-foreground text-sm">
                    No setup fees for any plan. You only pay the monthly or annual subscription 
                    fee, which includes development, deployment, and ongoing support.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, you can cancel your subscription at any time. Your AI agents will 
                    continue working until the end of your current billing period.
                  </p>
                </div>
              </div>
            </div>
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