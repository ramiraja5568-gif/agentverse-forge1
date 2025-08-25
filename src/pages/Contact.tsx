import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CustomButton } from "@/components/ui/custom-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight } from "lucide-react";
import ContactFormFormspree from "@/components/ContactForm.formspree";

const Contact = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            Have questions about our AI agents or want to discuss your project?
            We&apos;re here to help you find the perfect solution.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-gray-600">Myagentverse@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium">Call</p>
                  <p className="text-gray-600">+923319509139</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <ContactFormFormspree />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


