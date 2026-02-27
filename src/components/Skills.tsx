import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "./SectionWrapper";

const skills = [
  { name: "Python", pct: 90, color: "from-[hsl(217,91%,60%)] to-[hsl(200,95%,65%)]", bg: "bg-[hsl(217,91%,60%,0.1)]", border: "border-[hsl(217,91%,60%,0.2)]", text: "text-[hsl(217,91%,60%)]" },
  { name: "SQL", pct: 92, color: "from-[hsl(160,84%,39%)] to-[hsl(140,70%,50%)]", bg: "bg-[hsl(160,84%,39%,0.1)]", border: "border-[hsl(160,84%,39%,0.2)]", text: "text-[hsl(160,84%,39%)]" },
  { name: "Apache Spark", pct: 88, color: "from-[hsl(25,95%,53%)] to-[hsl(40,96%,55%)]", bg: "bg-[hsl(25,95%,53%,0.1)]", border: "border-[hsl(25,95%,53%,0.2)]", text: "text-[hsl(25,95%,53%)]" },
  { name: "Kafka", pct: 82, color: "from-[hsl(280,73%,58%)] to-[hsl(260,80%,65%)]", bg: "bg-[hsl(280,73%,58%,0.1)]", border: "border-[hsl(280,73%,58%,0.2)]", text: "text-[hsl(280,73%,58%)]" },
  { name: "Airflow", pct: 85, color: "from-[hsl(180,70%,45%)] to-[hsl(170,75%,55%)]", bg: "bg-[hsl(180,70%,45%,0.1)]", border: "border-[hsl(180,70%,45%,0.2)]", text: "text-[hsl(180,70%,45%)]" },
  { name: "dbt", pct: 78, color: "from-[hsl(340,82%,52%)] to-[hsl(320,75%,60%)]", bg: "bg-[hsl(340,82%,52%,0.1)]", border: "border-[hsl(340,82%,52%,0.2)]", text: "text-[hsl(340,82%,52%)]" },
  { name: "Snowflake", pct: 86, color: "from-[hsl(195,100%,50%)] to-[hsl(210,90%,60%)]", bg: "bg-[hsl(195,100%,50%,0.1)]", border: "border-[hsl(195,100%,50%,0.2)]", text: "text-[hsl(195,100%,50%)]" },
  { name: "AWS", pct: 84, color: "from-[hsl(36,100%,50%)] to-[hsl(45,95%,55%)]", bg: "bg-[hsl(36,100%,50%,0.1)]", border: "border-[hsl(36,100%,50%,0.2)]", text: "text-[hsl(36,100%,50%)]" },
  { name: "Azure", pct: 80, color: "from-[hsl(207,89%,52%)] to-[hsl(190,85%,55%)]", bg: "bg-[hsl(207,89%,52%,0.1)]", border: "border-[hsl(207,89%,52%,0.2)]", text: "text-[hsl(207,89%,52%)]" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionWrapper id="skills">
      <div className="container-narrow">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Skills</p>
        <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-12">
          Technical <span className="text-gradient-gold">Proficiency</span>
        </h2>
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.08, 
                type: "spring", 
                stiffness: 120,
                damping: 12
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.05, 
                rotate: 1,
                transition: { duration: 0.2 } 
              }}
              whileTap={{ scale: 0.98 }}
              className={`p-5 rounded-xl bg-card border ${s.border} ${s.bg} backdrop-blur-sm cursor-default transition-shadow hover:shadow-xl hover:shadow-primary/5`}
            >
              <div className="flex justify-between mb-3">
                <span className="font-heading font-medium text-foreground text-sm">{s.name}</span>
                <span className={`${s.text} text-sm font-semibold`}>{s.pct}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${s.color}`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${s.pct}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.07, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
