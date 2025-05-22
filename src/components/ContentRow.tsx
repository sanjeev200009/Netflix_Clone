
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ContentCard from './ContentCard';

interface ContentRowProps {
  title: string;
  contents: Array<{
    id: string;
    title: string;
    imageUrl: string;
    type: 'movie' | 'series';
    maturityRating: string;
    duration?: string;
    releaseYear: number;
    genres: string[];
  }>;
}

const ContentRow = ({ title, contents }: ContentRowProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth * 0.8;
      
      const newScrollLeft = direction === 'left'
        ? scrollLeft - scrollAmount
        : scrollLeft + scrollAmount;
      
      sliderRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
      
      // Check if arrows should be shown after scroll
      setTimeout(() => {
        if (sliderRef.current) {
          setShowLeftArrow(sliderRef.current.scrollLeft > 0);
          setShowRightArrow(
            sliderRef.current.scrollLeft + sliderRef.current.clientWidth < 
            sliderRef.current.scrollWidth - 5
          );
        }
      }, 300);
    }
  };

  return (
    <div className="relative py-8 z-10">
      <h2 className="text-xl font-medium mb-4 px-12">{title}</h2>
      
      <div className="group relative">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-netflix-black/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}
        
        {/* Content Slider */}
        <div 
          ref={sliderRef}
          className="flex overflow-x-scroll scrollbar-hide gap-2 px-12 scroll-smooth"
          onScroll={() => {
            if (sliderRef.current) {
              setShowLeftArrow(sliderRef.current.scrollLeft > 0);
              setShowRightArrow(
                sliderRef.current.scrollLeft + sliderRef.current.clientWidth < 
                sliderRef.current.scrollWidth - 5
              );
            }
          }}
        >
          {contents.map((content) => (
            <div key={content.id} className="flex-shrink-0 w-[250px] h-[140px] md:h-[160px]">
              <ContentCard {...content} />
            </div>
          ))}
        </div>
        
        {/* Right Arrow */}
        {showRightArrow && (
          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-netflix-black/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ContentRow;
