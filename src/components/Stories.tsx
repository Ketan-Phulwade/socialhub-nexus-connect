
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Plus, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import StoryViewer from './StoryViewer';

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

const Stories = () => {
  const { user } = useAuth();
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [showStoryViewer, setShowStoryViewer] = useState(false);

  const stories: Story[] = [
    {
      id: '1',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c1d9?w=150&h=150&fit=crop&crop=face',
        id: '2'
      },
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=600&fit=crop',
      timestamp: '2 hours ago',
      isViewed: false
    },
    {
      id: '2',
      author: {
        name: 'Mike Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        id: '3'
      },
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop',
      timestamp: '4 hours ago',
      isViewed: true
    },
    {
      id: '3',
      author: {
        name: 'Emma Wilson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        id: '4'
      },
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=600&fit=crop',
      timestamp: '6 hours ago',
      isViewed: false
    },
    {
      id: '4',
      author: {
        name: 'David Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        id: '5'
      },
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=600&fit=crop',
      timestamp: '8 hours ago',
      isViewed: true
    },
    {
      id: '5',
      author: {
        name: 'Lisa Park',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        id: '6'
      },
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=600&fit=crop',
      timestamp: '12 hours ago',
      isViewed: false
    }
  ];

  const handleStoryClick = (story: Story) => {
    setSelectedStory(story);
    setShowStoryViewer(true);
  };

  const handleCloseStoryViewer = () => {
    setShowStoryViewer(false);
    setSelectedStory(null);
  };

  return (
    <>
      <Card className="mb-6 shadow-sm">
        <CardContent className="p-4">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {/* Create Story Button */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                  <Plus className="h-8 w-8 text-gray-500" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <Avatar className="h-6 w-6 border-2 border-white">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback className="text-xs">{user?.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <p className="text-xs text-center mt-2 text-gray-600 font-medium">Create Story</p>
            </div>

            {/* Stories */}
            {stories.map((story) => (
              <div 
                key={story.id} 
                className="flex-shrink-0 cursor-pointer"
                onClick={() => handleStoryClick(story)}
              >
                <div className="relative">
                  <div 
                    className={`w-20 h-20 rounded-full p-1 ${
                      story.isViewed 
                        ? 'bg-gray-300' 
                        : 'bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500'
                    }`}
                  >
                    <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                      <img
                        src={story.image}
                        alt={`${story.author.name}'s story`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Avatar className="h-6 w-6 border-2 border-white">
                      <AvatarImage src={story.author.avatar} alt={story.author.name} />
                      <AvatarFallback className="text-xs">{story.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <p className="text-xs text-center mt-2 text-gray-600 font-medium truncate w-20">
                  {story.author.name.split(' ')[0]}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Story Viewer Modal */}
      {showStoryViewer && selectedStory && (
        <StoryViewer 
          story={selectedStory}
          onClose={handleCloseStoryViewer}
        />
      )}
    </>
  );
};

export default Stories;
