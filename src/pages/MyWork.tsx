import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CategoryCarousel from "@/components/CategoryCarousel";

// Placeholder images for each category
const logoImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop", alt: "Logo Design 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=400&fit=crop", alt: "Logo Design 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop", alt: "Logo Design 3" },
  { id: 4, src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=400&fit=crop", alt: "Logo Design 4" },
  { id: 5, src: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=400&fit=crop", alt: "Logo Design 5" },
  { id: 6, src: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=400&h=400&fit=crop", alt: "Logo Design 6" },
  { id: 7, src: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=400&fit=crop", alt: "Logo Design 7" },
  { id: 8, src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop", alt: "Logo Design 8" },
];

const thumbnailImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=400&fit=crop", alt: "Thumbnail 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=400&fit=crop", alt: "Thumbnail 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=400&fit=crop", alt: "Thumbnail 3" },
  { id: 4, src: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=400&h=400&fit=crop", alt: "Thumbnail 4" },
  { id: 5, src: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=400&fit=crop", alt: "Thumbnail 5" },
  { id: 6, src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=400&fit=crop", alt: "Thumbnail 6" },
  { id: 7, src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop", alt: "Thumbnail 7" },
  { id: 8, src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=400&fit=crop", alt: "Thumbnail 8" },
];

const posterImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop", alt: "Poster 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=400&fit=crop", alt: "Poster 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=400&fit=crop", alt: "Poster 3" },
  { id: 4, src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=400&fit=crop", alt: "Poster 4" },
  { id: 5, src: "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=400&fit=crop", alt: "Poster 5" },
  { id: 6, src: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=400&fit=crop", alt: "Poster 6" },
  { id: 7, src: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=400&fit=crop", alt: "Poster 7" },
  { id: 8, src: "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=400&h=400&fit=crop", alt: "Poster 8" },
];

const mockupImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=400&fit=crop", alt: "Mockup 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&h=400&fit=crop", alt: "Mockup 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=400&h=400&fit=crop", alt: "Mockup 3" },
  { id: 4, src: "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=400&h=400&fit=crop", alt: "Mockup 4" },
  { id: 5, src: "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?w=400&h=400&fit=crop", alt: "Mockup 5" },
  { id: 6, src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=400&fit=crop", alt: "Mockup 6" },
  { id: 7, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", alt: "Mockup 7" },
  { id: 8, src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=400&fit=crop", alt: "Mockup 8" },
];

const MyWork = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        
        {/* Animated glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'var(--gradient-glow)' }}
        />
        
        {/* Grain overlay */}
        <div className="absolute inset-0 grain-overlay" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-hero text-6xl md:text-8xl lg:text-9xl mb-6"
          >
            MY WORK
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-body text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A showcase of my design projects across logos, thumbnails, posters, and mockups
          </motion.p>
        </div>
      </section>

      {/* Category Sections */}
      <section className="px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <CategoryCarousel title="Logos" images={logoImages} />
          <CategoryCarousel title="Thumbnails" images={thumbnailImages} />
          <CategoryCarousel title="Posters" images={posterImages} />
          <CategoryCarousel title="Mockups" images={mockupImages} />
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default MyWork;
