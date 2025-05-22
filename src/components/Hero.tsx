
import { Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  // In a real app, this would be fetched from an API
  const featuredContent = {
    title: "The Queen's Gambit",
    description: "In a 1960s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction.",
    imageUrl: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=2074&auto=format&fit=crop",
    videoUrl: "#"
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 banner-gradient z-10"></div>
        <div className="absolute bottom-0 h-32 w-full bottom-fade z-10"></div>
        <img
          src={featuredContent.imageUrl}
          alt={featuredContent.title}
          className="w-full h-full object-cover object-top animate-pulse-slow"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end pb-40 px-12 max-w-3xl">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {featuredContent.title}
          </h1>
          
          <p className="text-lg text-white/90 mb-8 line-clamp-3">
            {featuredContent.description}
          </p>
          
          <div className="flex space-x-4">
            <Button className="bg-white text-netflix-black hover:bg-white/90 rounded-md px-8 py-3 text-lg font-medium flex items-center gap-2 transition-transform hover:scale-105">
              <Play className="h-5 w-5 fill-current" />
              Play
            </Button>
            
            <Button variant="outline" className="bg-netflix-gray/80 text-white border-none hover:bg-netflix-gray rounded-md px-6 py-3 text-lg font-medium flex items-center gap-2 transition-transform hover:scale-105">
              <Info className="h-5 w-5" />
              More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
