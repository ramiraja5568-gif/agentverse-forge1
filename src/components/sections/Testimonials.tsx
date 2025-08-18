import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "MyAgentVerse transformed our customer service. Our AI agent handles 80% of inquiries automatically, and customer satisfaction has increased by 35%. The ROI was immediate.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Michael Chen",
    role: "Operations Director, Growth Labs",
    content: "The sales assistant AI they built for us increased our conversion rate by 45%. It's like having a top-performing sales rep available 24/7. Absolutely game-changing.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager, Digital Dynamics",
    content: "Their data research agent saves us 20+ hours per week. What used to take our team days now gets done in minutes with incredible accuracy. Best investment we've made.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See how businesses like yours are achieving
            remarkable results with our AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-6 rounded-2xl bg-card border hover:shadow-lg transition-all duration-300 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;