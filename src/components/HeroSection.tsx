import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import designerPhoto from '@/assets/designer-photo.png';
const toolIcons = [{
  name: 'Ai',
  color: '#FF9A00',
  position: 'top-[10%] left-[5%]'
}, {
  name: 'Ps',
  color: '#31A8FF',
  position: 'top-[25%] right-[8%]'
}, {
  name: 'Xd',
  color: '#FF61F6',
  position: 'top-[60%] right-[2%]'
}, {
  name: 'Fg',
  color: '#A259FF',
  position: 'bottom-[15%] right-[15%]'
}, {
  name: 'Sk',
  color: '#F7B500',
  position: 'bottom-[10%] left-[10%]'
}];
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
          }} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">SHAH
Razeen<br />
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
            <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full bg-primary/30 blur-2xl" />
            <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-primary/50" />

            {/* Orbit rings */}
            <div className="orbit-ring w-[400px] h-[400px] md:w-[500px] md:h-[500px] animate-orbit" />
            <div className="orbit-ring w-[320px] h-[320px] md:w-[420px] md:h-[420px] animate-orbit-reverse" />

            {/* Designer photo */}
            <motion.div initial={{
            y: 50,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            delay: 0.5,
            duration: 0.8
          }} className="relative z-10">
              <img src={designerPhoto} alt="Designer" className="w-[280px] md:w-[350px] object-contain relative z-10" />
            </motion.div>

            {/* Floating tool icons */}
            {toolIcons.map((tool, index) => <motion.div key={tool.name} initial={{
            opacity: 0,
            scale: 0
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 1 + index * 0.1,
            type: 'spring'
          }} className={`floating-icon w-12 h-12 md:w-14 md:h-14 ${tool.position} animate-float`} style={{
            animationDelay: `${index * 0.5}s`
          }}>
                
              </motion.div>)}
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