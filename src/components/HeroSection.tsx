import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import designerPhoto from '@/assets/designer-photo.png';
const toolIcons = [
  {
    name: 'Ps',
    fullName: 'Photoshop',
    color: '#31A8FF',
    position: 'top-[10%] right-[5%]'
  },
  {
    name: 'Ai',
    fullName: 'Illustrator',
    color: '#FF9A00',
    position: 'bottom-[25%] right-[0%]'
  },
  {
    name: 'Cv',
    fullName: 'Canva',
    color: '#00C4CC',
    position: 'bottom-[15%] left-[5%]'
  }
];
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Animated glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl animate-pulse-glow" style={{
      background: 'var(--gradient-glow)'
    }} />

      {/* Grain overlay */}
      <div className="absolute inset-0 grain-overlay" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }} className="space-y-8">
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="font-body text-muted-foreground text-lg">
              Hello, I'm
            </motion.p>

            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.8
          }} className="font-display text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight">
              SHAH RAZEEN<br />
              <span className="text-gradient">Designer</span>
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5
          }} className="font-body text-xl text-muted-foreground max-w-md">
              Crafting bold visual stories through design, branding, and digital experiences that leave lasting impressions.
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7
          }} className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                View Work
              </Button>
              <Button variant="heroOutline" size="xl">
                Contact Me
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.9
          }} className="flex gap-12 pt-8">
              <div>
                <p className="font-display text-4xl font-bold text-primary">5+</p>
                <p className="font-body text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-primary">100+</p>
                <p className="font-body text-sm text-muted-foreground">Projects Done</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-primary">50+</p>
                <p className="font-body text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Photo with Orbit */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1,
          ease: 'easeOut'
        }} className="relative flex items-center justify-center">
            {/* Glowing circles */}
            <div className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-full bg-primary/30 blur-2xl" />
            <div className="absolute w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full bg-primary/40" />

            {/* Orbit rings */}
            <div className="orbit-ring w-[380px] h-[380px] md:w-[480px] md:h-[480px] animate-orbit" />
            <div className="orbit-ring w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-orbit-reverse" />

            {/* Designer photo with circular mask */}
            <motion.div initial={{
            y: 50,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            delay: 0.5,
            duration: 0.8
          }} className="relative z-10 rounded-full overflow-hidden w-[200px] h-[200px] md:w-[280px] md:h-[280px] border-4 border-primary/40 shadow-[0_0_40px_rgba(205,255,50,0.3)]">
              <img 
                alt="Shah Razeen - Graphic Designer" 
                className="w-full h-full object-cover object-top scale-110" 
                src="/lovable-uploads/aa17b3e5-4c08-4eef-bd14-4e9d039fc44c.png" 
              />
            </motion.div>

            {/* Floating tool icons */}
            {toolIcons.map((tool, index) => (
              <motion.div 
                key={tool.name} 
                initial={{
                  opacity: 0,
                  scale: 0
                }} 
                animate={{
                  opacity: 1,
                  scale: 1
                }} 
                transition={{
                  delay: 1 + index * 0.1,
                  type: 'spring'
                }} 
                className={`floating-icon w-14 h-14 md:w-16 md:h-16 ${tool.position} animate-float flex items-center justify-center`} 
                style={{
                  animationDelay: `${index * 0.5}s`,
                  background: `linear-gradient(135deg, ${tool.color}20, ${tool.color}40)`,
                  borderColor: tool.color,
                  boxShadow: `0 0 20px ${tool.color}40`
                }}
              >
                <span 
                  className="font-display font-bold text-lg md:text-xl"
                  style={{ color: tool.color }}
                >
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.5
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-body text-xs text-muted-foreground">Scroll Down</span>
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }}>
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;