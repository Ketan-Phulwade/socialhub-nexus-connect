
import { useState, useEffect } from 'react';
import PostCard from './PostCard';

interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    id: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
}

const NewsFeed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading posts
    const mockPosts: Post[] = [
      {
        id: '1',
        author: {
          name: 'Sarah Johnson',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c1d9?w=150&h=150&fit=crop&crop=face',
          id: '2'
        },
        content: 'Just finished an amazing hiking trip in the mountains! The views were absolutely breathtaking. Nature has a way of putting everything into perspective. 🏔️ #hiking #nature #adventure',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        timestamp: '2 hours ago',
        likes: 24,
        comments: 8,
        shares: 3,
        isLiked: false
      },
      {
        id: '2',
        author: {
          name: 'Mike Chen',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
          id: '3'
        },
        content: 'Working on a new project that I\'m really excited about! Can\'t wait to share more details soon. The team has been incredibly supportive and innovative. 💻 #coding #startup #innovation',
        timestamp: '4 hours ago',
        likes: 18,
        comments: 5,
        shares: 2,
        isLiked: true
      },
      {
        id: '3',
        author: {
          name: 'Emma Wilson',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
          id: '4'
        },
        content: 'Had the most delicious brunch with friends today! Sometimes the simple moments are the best ones. Good food, great company, and lots of laughter. ☕️ #brunch #friends #weekend',
        image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop',
        timestamp: '6 hours ago',
        likes: 31,
        comments: 12,
        shares: 1,
        isLiked: false
      },
      {
        id: '4',
        author: {
          name: 'David Rodriguez',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
          id: '5'
        },
        content: 'Celebrating 5 years at my company today! Time flies when you\'re passionate about what you do. Grateful for all the opportunities and amazing colleagues. 🎉 #work #milestone #grateful',
        timestamp: '8 hours ago',
        likes: 42,
        comments: 15,
        shares: 4,
        isLiked: true
      }
    ];

    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          }
        : post
    ));
  };

  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={() => handleLike(post.id)}
        />
      ))}
    </div>
  );
};

export default NewsFeed;
