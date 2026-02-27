import AnimatedCounter from "./AnimatedCounter";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const stats = [
  { target: 5, suffix: "+", label: "Years of Experience" },
  { target: 450, suffix: "B+", label: "Records Processed Daily" },
  { target: 50, suffix: "%", label: "Pipeline Incident Reduction" },
];

const Stats = () => (
  <SectionWrapper className="!py-12 lg:!py-16" zoom direction="none">
    <div className="container-narrow">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
        {stats.map((s, i) => (
          <motion.div 
            key={i} 
            className="text-center p-6 rounded-2xl bg-card/30 border border-primary/5 hover:border-primary/20 transition-colors"
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <AnimatedCounter target={s.target} suffix={s.suffix} />
            <p className="text-muted-foreground text-sm mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Stats;
