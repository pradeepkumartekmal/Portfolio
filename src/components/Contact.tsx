import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";
import SectionWrapper from "./SectionWrapper";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      toast.success("Message sent successfully! I'll get back to you soon.");
      reset();
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="container-narrow">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Contact</p>
        <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
          Get In <span className="text-gradient-gold">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">Let's build reliable data systems together.</p>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:tekmalpradeep@gmail.com" className="text-foreground text-sm hover:text-primary transition-colors">
                  tekmalpradeep@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground text-sm">Aurora, Illinois, United States</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <a href="https://linkedin.com/in/pradeepkumar1316" target="_blank" rel="noopener noreferrer" className="text-foreground text-sm hover:text-primary transition-colors">
                  linkedin.com/in/pradeepkumar1316
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-3 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input
                  {...register("name")}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <input
                  {...register("email")}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>
            <div>
              <input
                {...register("subject")}
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject.message}</p>}
            </div>
            <div>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-gold text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
