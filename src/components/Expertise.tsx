import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "./SectionWrapper";

const services = [
  { num: "01", title: "Data Pipeline Architecture", desc: "Designing end-to-end batch and streaming architectures for reliability at scale." },
  { num: "02", title: "Streaming Ingestion & Real-Time Processing", desc: "Kafka, Spark Streaming, and event-driven architectures for sub-second data delivery." },
  { num: "03", title: "Data Modeling & Analytics-Ready Datasets", desc: "Star schemas, dimensional models, and optimized warehousing in Snowflake and Synapse." },
  { num: "04", title: "Data Quality & Observability", desc: "Monitoring, alerting, validation frameworks that catch issues before they reach downstream." },
  { num: "05", title: "Performance Optimization & Cost Control", desc: "Spark tuning, query optimization, and infrastructure right-sizing that saves millions." },
  { num: "06", title: "Reliability Engineering & Incident Reduction", desc: "Building resilient pipelines with 99.99% availability and proactive alerting." },
];

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper id="expertise">
      <div className="container-narrow">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">What I Do</p>
        <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-12">
          My Data Engineering <span className="text-gradient-gold">Expertise</span>
        </h2>
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow-gold-sm hover:-translate-y-1"
            >
              <span className="text-primary/40 font-heading text-3xl font-bold">{s.num}</span>
              <h3 className="font-heading font-semibold text-foreground mt-3 mb-2 text-sm">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Expertise;
