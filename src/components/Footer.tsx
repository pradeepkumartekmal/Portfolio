import { Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Pradeep Kumar. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {/* Gmail direct open */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tekmalpradeep@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Pradeep%2C%0A%0A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>

          <a
            href="https://linkedin.com/in/pradeepkumar1316"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <button
            onClick={scrollTop}
            className="p-2 rounded-full border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;