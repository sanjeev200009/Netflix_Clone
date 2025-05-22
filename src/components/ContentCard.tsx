
import { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';

interface ContentCardProps {
  id: string;
  title: string;
  imageUrl: string;
  type: 'movie' | 'series';
  maturityRating: string;
  duration?: string;
  releaseYear: number;
  genres: string[];
}

const ContentCard = ({
  id,
  title,
  imageUrl,
  type,
  maturityRating,
  duration,
  releaseYear,
  genres
}: ContentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative group rounded-md overflow-hidden card-hover-effect"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base Card */}
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500"
      />
      
      {/* Hover Card with Details */}
      {isHovered && (
        <div className="absolute inset-0 bg-netflix-dark/90 flex flex-col p-3 animate-fade-in shadow-xl">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <button className="bg-white rounded-full p-1 hover:bg-white/90 transition-colors">
                <Play className="h-4 w-4 text-netflix-black fill-current" />
              </button>
              
              <button className="border border-white/40 rounded-full p-1 hover:border-white transition-colors">
                <Plus className="h-4 w-4" />
              </button>
              
              <button className="border border-white/40 rounded-full p-1 hover:border-white transition-colors">
                <ThumbsUp className="h-4 w-4" />
              </button>
              
              <div className="flex-1"></div>
              
              <button className="border border-white/40 rounded-full p-1 hover:border-white transition-colors">
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            
            <h3 className="font-semibold text-sm line-clamp-1 mb-1">{title}</h3>
            
            <div className="flex items-center text-xs space-x-2 mb-2">
              <span className="text-green-500 font-medium">98% Match</span>
              <span className="border border-white/40 px-1 text-[10px]">{maturityRating}</span>
              <span>{releaseYear}</span>
              {duration && <span>{duration}</span>}
              <span className="border border-white/40 rounded-sm px-1 text-[10px] uppercase">{type === 'series' ? 'Series' : 'Movie'}</span>
            </div>
            
            <div className="text-xs line-clamp-1">
              {genres.join(' • ')}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentCard;
