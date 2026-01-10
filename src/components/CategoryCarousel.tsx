import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

interface CategoryImage {
  id: number;
  src: string;
  alt: string;
}

interface CategoryCarouselProps {
  title: string;
  images: CategoryImage[];
}

const CategoryCarousel = ({ title, images }: CategoryCarouselProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-foreground">
        {title}
      </h2>
      <div className="relative px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {images.map((image) => (
              <CarouselItem
                key={image.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-secondary/50 border border-border group cursor-pointer">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-background/80 border-border hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="right-0 bg-background/80 border-border hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </motion.div>
  );
};

export default CategoryCarousel;
