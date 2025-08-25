import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CustomButton } from "@/components/ui/custom-button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Send } from "lucide-react";

// 1) Replace this with your own Formspree endpoint from your dashboard
//    It looks like: https://formspree.io/f/abcdwxyz
const FORM_ENDPOINT = "https://formspree.io/f/mzzaplgj";

export default function ContactFormFormspree() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset(); // clear inputs after success
      } else {
        let msg = "Something went wrong. Please try again.";
        try {
          const out = await res.json();
          if (out?.errors?.length) msg = out.errors[0].message;
        } catch {}
        setError(msg);
        setStatus("error");
      }
    } catch (err) {
      setError("Network error. Check your internet and try again.");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Optional: set the email subject for messages you receive */}
      <input type="hidden" name="_subject" value="New project inquiry from website" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Company Name *
          </label>
          <Input id="company" name="company" placeholder="Your Company" required />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address *
          </label>
          <Input type="email" id="email" name="email" placeholder="you@company.com" required />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Project Description *
        </label>
        <Textarea id="message" name="message" rows={6} placeholder="Tell us about your project..." required />
      </div>

      <CustomButton type="submit" variant="hero" size="lg" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
        <Send className="ml-2 h-5 w-5" />
      </CustomButton>

      {status === "success" && (
        <Alert className="border-green-500/40">
          <AlertTitle>Message sent!</AlertTitle>
          <AlertDescription>
            Thanks — we got your message and will reply to your email shortly.
          </AlertDescription>
        </Alert>
      )}

      {status === "error" && (
        <Alert variant="destructive">
          <AlertTitle>Could not send</AlertTitle>
          <AlertDescription>{error ?? "Please try again or email us directly."}</AlertDescription>
        </Alert>
      )}
    </form>
  );
}