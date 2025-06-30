
import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { X, Heart, MessageCircle, Send } from 'lucide-react';

interface Story {
  id: string;
  author: {
    name: string;
    avatar: string;
    id: string;
  };
  image: string;
  timestamp: string;
  isViewed: boolean;
}

interface StoryViewerProps {
  story: Story;
  onClose: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({ story, onClose }) => {
  const [progress, setProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          onClose();
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onClose]);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="relative max-w-md w-full h-full md:h-auto md:max-h-[90vh] bg-black md:rounded-lg overflow-hidden">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-600 z-10">
          <div 
            className="h-full bg-white transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Header */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 border-2 border-white">
              <AvatarImage src={story.author.avatar} alt={story.author.name} />
              <AvatarFallback>{story.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-white font-semibold text-sm">{story.author.name}</p>
              <p className="text-gray-300 text-xs">{story.timestamp}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Story Image */}
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={story.image}
            alt={`${story.author.name}'s story`}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Action buttons */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`text-white hover:bg-white/20 ${isLiked ? 'text-red-500' : ''}`}
            >
              <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>

        {/* Tap areas for navigation */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full" onClick={onClose} />
          <div className="w-1/2 h-full" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default StoryViewer;
