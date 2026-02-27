import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const workExperience = [
  {
    company: "Bloomberg",
    role: "Senior Data Engineer",
    period: "May 2024 — Present",
    location: "Chicago",
    bullets: [
      "Owned batch and real-time pipelines processing 450B+ market data records per day",
      "Streaming ingestion from 300+ global exchanges, reduced peak hour latency by 30%",
      "Spark on AWS EMR and EC2, cut processing time by 40%",
      "Validation, monitoring, alerting — reduced incidents by 50%",
      "Spark tuning improved query performance by 55% and reduced annual costs by $5M",
    ],
  },
  {
    company: "CVS Health",
    role: "Python Data Engineer",
    period: "Apr 2020 — Nov 2022",
    location: "Remote",
    bullets: [
      "Azure pipelines for 100M+ members",
      "HIPAA compliant ETL with ADF, Databricks, PySpark — 150M+ records per month",
      "Snowflake and Synapse models for reporting used by 8K+ clinicians",
      "Streaming for adherence events, contributed to 18% reduction in readmissions",
      "Data quality framework for 400+ pipelines, reduced incidents by 50%",
    ],
  },
  {
    company: "Discover",
    role: "Data Engineer",
    period: "May 2019 — Mar 2020",
    location: "Chicago",
    bullets: [
      "300M+ transactions per month, 99.99% availability",
      "Snowflake dimensional models for regulatory reporting",
      "ETL with Informatica, SSIS, AWS Glue, Airflow",
      "Automated 50+ reports, reduced manual effort by 70%",
      "Kafka and Spark for fraud analytics",
    ],
  },
];

const education = [
  {
    school: "Lewis University",
    degree: "MS Computer Science",
    period: "Jan 2023 — Dec 2024",
  },
  {
    school: "CBIT",
    degree: "BE Computer Engineering",
    period: "Aug 2016 — Nov 2020",
  },
];

const Resume = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionWrapper id="resume">
      <div className="container-narrow" ref={sectionRef}>
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">My Resume</p>
        <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
          Real Problem <span className="text-gradient-gold">Solutions Experience</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">Proven track record delivering reliable data infrastructure at scale.</p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Work */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-xl font-semibold">Work Experience</h3>
            </div>
            <div className="relative pl-6 border-l border-border">
              {/* Progress line */}
              <motion.div
                className="absolute left-[-1px] top-0 w-[2px] bg-gradient-gold origin-top"
                style={{ height: lineHeight }}
              />
              <div className="space-y-10">
                {workExperience.map((job, i) => (
                  <TimelineCard key={i} index={i}>
                    <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                    <p className="text-primary text-xs font-medium mb-1">{job.period} · {job.location}</p>
                    <h4 className="font-heading font-semibold text-foreground">{job.role}</h4>
                    <p className="text-muted-foreground text-sm mb-3">{job.company}</p>
                    <ul className="space-y-1.5">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </TimelineCard>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-xl font-semibold">Education</h3>
            </div>
            <div className="relative pl-6 border-l border-border">
              <div className="space-y-10">
                {education.map((edu, i) => (
                  <TimelineCard key={i} index={i}>
                    <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                    <p className="text-primary text-xs font-medium mb-1">{edu.period}</p>
                    <h4 className="font-heading font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm">{edu.school}</p>
                  </TimelineCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const TimelineCard = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

export default Resume;
