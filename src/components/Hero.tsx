import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Calendar } from "lucide-react";
import profileImg from "@/assets/profile.png";

interface HeroProps {
  onOpenAppointment: () => void;
}

const Hero = ({ onOpenAppointment }: HeroProps) => {
  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 600], [0, -80]);
  const blob2Y = useTransform(scrollY, [0, 600], [0, 60]);
  const profileY = useTransform(scrollY, [0, 600], [0, 30]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-28 lg:pt-20 overflow-hidden"
    >
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-[100px]"
        style={{ y: blob1Y }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/8 blur-[120px]"
        style={{ y: blob2Y }}
      />

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground text-sm tracking-widest uppercase mb-4"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-2"
            >
              Pradeep
              <br />
              <span className="text-gradient-gold">Kumar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-primary font-heading text-xl lg:text-2xl font-medium mb-6"
            >
              Data Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-md mb-8"
            >
              Building reliable data systems that organizations trust.
              Specializing in scalable pipelines, real-time ingestion, and data
              quality at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="/Pradeep_Kumar_Tekmal_02.pdf"
                download="Pradeep_Kumar_Tekmal_02.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-all glow-gold-sm"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>

              <motion.button
                onClick={onOpenAppointment}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(var(--primary), 0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-primary font-semibold transition-all"
              >
                <Calendar className="w-4 h-4" />
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.4,
              type: "spring",
              bounce: 0.4,
            }}
            style={{ y: profileY }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary/20 glow-gold">
                <motion.img
                  src={profileImg}
                  alt="Pradeep Kumar"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              <motion.div
                className="absolute inset-0 rounded-full border border-primary/10 scale-110"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              <div className="absolute inset-0 rounded-full border border-primary/5 scale-125" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;