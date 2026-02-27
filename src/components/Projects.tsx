import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";
import project4 from "@/assets/project4.png";

const projects = [
  {
    title: "Real Time Data Pipeline",
    desc: "Streaming ingestion and transformation with monitoring and data quality checks.",
    tag: "Data Engineering",
    img: project1,
    href: "#",
  },
  {
    title: "Analytics Dashboard",
    desc: "End to end pipeline feeding BI metrics with optimized warehouse modeling.",
    tag: "Analytics",
    img: project2,
    href: "#",
  },
  {
    title: "ETL Automation",
    desc: "Automated ELT workflows with retries, alerts, and idempotent loads.",
    tag: "Automation",
    img: project3,
    href: "#",
  },
  {
    title: "Cloud Data Lake",
    desc: "Lakehouse style storage with partitioning and cost optimized reads.",
    tag: "Cloud",
    img: project4,
    href: "#",
  },
];

const Projects = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  return (
    <SectionWrapper id="projects" zoom direction="up">
      <div className="container-narrow">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
          Portfolio
        </p>
        <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-12">
          Latest <span className="text-gradient-gold">Works</span>
        </h2>

        <motion.div
          ref={targetRef}
          style={{ x }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {projects.map((p, i) => (
            <motion.a
              key={`${p.title}-${i}`}
              href={p.href}
              target={p.href?.startsWith("http") ? "_blank" : undefined}
              rel={p.href?.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-300 cursor-pointer block"
            >
              <div className="aspect-video overflow-hidden relative">
                <motion.img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              <div className="p-5">
                <span className="text-primary text-xs font-medium tracking-wider uppercase">
                  {p.tag}
                </span>
                <h3 className="font-heading font-semibold text-foreground mt-1 mb-2 flex items-center gap-1.5 group-hover:text-primary transition-colors">
                  {p.title}
                  <motion.span whileHover={{ x: 3, y: -3 }}>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.span>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;