import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Layers, Lightbulb, Rocket } from 'lucide-react';

const skills = [
  { name: 'Adobe Illustrator', level: 95 },
  { name: 'Adobe Photoshop', level: 90 },
  { name: 'Figma', level: 92 },
  { name: 'UI/UX Design', level: 88 },
  { name: 'Brand Identity', level: 94 },
  { name: 'Typography', level: 90 },
];

const values = [
  { icon: Palette, title: 'Creative Vision', desc: 'Transforming ideas into visual masterpieces' },
  { icon: Layers, title: 'Attention to Detail', desc: 'Every pixel matters in my designs' },
  { icon: Lightbulb, title: 'Innovative Thinking', desc: 'Fresh perspectives for unique solutions' },
  { icon: Rocket, title: 'Results Driven', desc: 'Designs that achieve business goals' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-secondary/30 -skew-x-12 -translate-x-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-primary text-sm tracking-widest uppercase">About Me</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4">
            Designing with <span className="text-gradient">Purpose</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Bio & Values */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              I'm a passionate graphic designer with over 5 years of experience creating 
              compelling visual identities, digital experiences, and brand stories. My approach 
              combines strategic thinking with creative execution to deliver designs that not 
              only look stunning but also drive real results.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              From logo design to complete brand systems, web interfaces to print materials, 
              I bring dedication and creativity to every project. Let's create something 
              extraordinary together.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="card-glow p-6 rounded-xl"
                >
                  <value.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-display text-lg font-semibold mb-1">{value.title}</h4>
                  <p className="font-body text-sm text-muted-foreground">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl font-bold mb-8">Skills & Expertise</h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between font-body text-sm">
                  <span>{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: 'var(--gradient-accent)' }}
                  />
                </div>
              </motion.div>
            ))}

            {/* Tools */}
            <div className="pt-8">
              <h4 className="font-display text-lg font-semibold mb-4">Tools I Use</h4>
              <div className="flex flex-wrap gap-3">
                {['Photoshop', 'Illustrator', 'Figma', 'After Effects', 'XD', 'InDesign', 'Blender', 'Sketch'].map((tool) => (
                  <span
                    key={tool}
                    className="font-body text-sm px-4 py-2 bg-secondary rounded-full text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
