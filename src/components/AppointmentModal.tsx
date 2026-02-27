import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal = ({ open, onClose }: ContactModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const raw = await res.text(); // read raw response always
      let parsed: any = {};
      try {
        parsed = raw ? JSON.parse(raw) : {};
      } catch {
        parsed = {};
      }

      if (!res.ok) {
        const msg =
          parsed?.error ||
          raw ||
          `Request failed (HTTP ${res.status})`;
        throw new Error(msg);
      }

      toast.success("Message sent successfully! I’ll get back to you soon.");
      reset();
      onClose();
    } catch (e: any) {
      toast.error(e?.message || "Message failed. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="w-full max-w-md rounded-xl bg-card border border-border p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Contact Me
                </h3>
                <button
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input
                    {...register("name")}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register("email")}
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    {...register("message")}
                    rows={3}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg bg-gradient-gold text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;