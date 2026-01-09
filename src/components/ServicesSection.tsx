import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brush, Layout, Box, PenTool, Monitor, Camera } from 'lucide-react';

const services = [
  {
    icon: Brush,
    title: 'Brand Identity',
    description: 'Complete brand systems including logos, color palettes, typography, and brand guidelines that tell your story.',
    features: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Stationery Design'],
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'User-centered digital experiences that are both beautiful and functional, driving engagement and conversions.',
    features: ['Web Design', 'Mobile Apps', 'Wireframing', 'Prototyping'],
  },
  {
    icon: Box,
    title: 'Packaging Design',
    description: 'Eye-catching packaging that stands out on shelves and creates memorable unboxing experiences.',
    features: ['Product Packaging', 'Label Design', 'Box Design', 'Mockups'],
  },
  {
    icon: PenTool,
    title: 'Illustration',
    description: 'Custom illustrations and graphics that add personality and uniqueness to your brand communications.',
    features: ['Digital Illustration', 'Icon Design', 'Infographics', 'Character Design'],
  },
  {
    icon: Monitor,
    title: 'Print Design',
    description: 'High-quality print materials from business cards to large format designs that make lasting impressions.',
    features: ['Brochures', 'Posters', 'Business Cards', 'Marketing Materials'],
  },
  {
    icon: Camera,
    title: 'Social Media',
    description: 'Scroll-stopping content and cohesive visual strategies that amplify your brand presence online.',
    features: ['Post Templates', 'Story Design', 'Ad Creatives', 'Content Strategy'],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-primary text-sm tracking-widest uppercase">What I Do</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4">
            Services & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            I offer a comprehensive range of design services to help your brand stand out and achieve its goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group card-glow p-8 rounded-2xl hover:border-primary/30 border border-transparent transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-display text-xl font-bold mb-3">{service.title}</h3>
              <p className="font-body text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="font-body text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
