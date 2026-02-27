import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const testimonials = [
  {
    quote: "Pradeep's pipelines just work. He reduced our incident rate by half and brought a level of reliability we hadn't seen before.",
    name: "Engineering Director",
    role: "Bloomberg",
  },
  {
    quote: "His Spark optimizations saved us millions annually. He takes full ownership and delivers results that matter.",
    name: "VP of Data",
    role: "Financial Services",
  },
  {
    quote: "Pradeep built our entire data quality framework. The observability he introduced transformed how our team operates.",
    name: "Data Platform Lead",
    role: "Healthcare Tech",
  },
  {
    quote: "Incredibly reliable engineer. He doesn't just build pipelines — he builds trust in data across the organization.",
    name: "Senior Manager",
    role: "Enterprise Data",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <SectionWrapper id="testimonials">
      <div className="container-narrow">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Testimonials</p>
        <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-12">
          What People <span className="text-gradient-gold">Say</span>
        </h2>
        <div ref={ref} className="max-w-2xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="p-8 rounded-xl bg-card border border-border text-center"
          >
            <Quote className="w-8 h-8 text-primary/30 mx-auto mb-4" />
            <p className="text-foreground text-lg leading-relaxed mb-6 italic">"{testimonials[current].quote}"</p>
            <p className="font-heading font-semibold text-foreground">{testimonials[current].name}</p>
            <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
          </motion.div>
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="p-2 rounded-full border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-muted-foreground/30"}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-full border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
