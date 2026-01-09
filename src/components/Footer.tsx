const Footer = () => {
  return (
    <footer className="relative py-12 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="font-display text-2xl font-bold text-foreground">
            Portfolio<span className="text-primary">.</span>
          </a>

          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} All rights reserved. Designed with passion.
          </p>

          {/* Spacer to maintain layout balance */}
          <div className="w-10 h-10 hidden md:block" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
