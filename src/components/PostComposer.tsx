
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Image, Camera, Video } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const PostComposer = () => {
  const { user } = useAuth();
  const [content, setContent] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const { toast } = useToast();

  const handlePost = async () => {
    if (!content.trim()) return;
    
    setIsPosting(true);
    
    // Simulate posting
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Post shared!",
      description: "Your post has been shared with your friends.",
    });
    
    setContent('');
    setIsPosting(false);
  };

  return (
    <Card className="mb-6 shadow-sm">
      <CardContent className="p-4">
        <div className="flex space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder={`What's on your mind, ${user?.name?.split(' ')[0]}?`}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[100px] resize-none border-none shadow-none focus:ring-0 text-lg placeholder:text-gray-500"
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-50">
              <Image className="h-5 w-5 mr-2" />
              Photo
            </Button>
            <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
              <Video className="h-5 w-5 mr-2" />
              Video
            </Button>
            <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-50">
              <Camera className="h-5 w-5 mr-2" />
              Camera
            </Button>
          </div>
          
          <Button
            onClick={handlePost}
            disabled={!content.trim() || isPosting}
            className="bg-blue-600 hover:bg-blue-700 px-6"
          >
            {isPosting ? 'Posting...' : 'Post'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostComposer;
