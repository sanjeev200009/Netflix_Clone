
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ContentRow from '@/components/ContentRow';
import { mockContent } from '@/data/mockContent';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-netflix-black">
        <div className="text-netflix-red font-bold text-4xl transform -skew-x-12 animate-pulse">
          NETFLIX
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-netflix-black text-white">
      <Header />
      
      <main>
        <Hero />
        
        <div className="relative z-10 mt-[-100px]">
          <ContentRow title="Continue Watching for You" contents={mockContent.continueWatching} />
          <ContentRow title="Trending Now" contents={mockContent.trending} />
          <ContentRow title="New Releases" contents={mockContent.newReleases} />
          <ContentRow title="Top Picks for You" contents={mockContent.topPicks} />
        </div>
      </main>
      
      <footer className="py-10 px-12 text-center text-sm text-white/60">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-8 mb-6">
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Statement</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Preferences</a>
            <a href="#" className="hover:text-white transition-colors">Help Center</a>
          </div>
          <p>© 2023 Netflix Clone. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
