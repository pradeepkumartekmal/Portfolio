import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const strengths = [
  "Batch and streaming pipelines",
  "Data quality, monitoring, alerting",
  "Spark optimization and cost reduction",
  "AWS and Azure data platforms",
  "Snowflake data modeling",
  "Reliability engineering and observability",
];

const About = () => {
  const listRef = useRef(null);
  const isInView = useInView(listRef, { once: true, margin: "-60px" });

  return (
    <SectionWrapper id="about" direction="right" zoom>
      <div className="container-narrow grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">About Me</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
            Turning Data into <span className="text-gradient-gold">Reliable Systems</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-10">
            I specialize in building dependable batch and streaming pipelines that process hundreds of billions of records daily. 
            My focus is on observability, resilience, cost efficiency, and enabling data teams to trust their data at every stage.
          </p>
          <div ref={listRef} className="grid sm:grid-cols-2 gap-4">
            {strengths.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 5, color: "var(--primary)" }}
                className="flex items-center gap-3 cursor-default"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground text-sm transition-colors">{s}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
          <div className="relative p-8 rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-xl">
            <h3 className="font-heading text-2xl font-bold mb-4 text-gradient-gold">Philosophy</h3>
            <p className="text-muted-foreground italic leading-relaxed">
              "Data is only as good as the pipeline it travels through. Reliability isn't a feature, it's the foundation."
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
