
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Users, Plus, TrendingUp, MapPin } from 'lucide-react';

const Groups = () => {
  const myGroups = [
    {
      id: '1',
      name: 'Tech Enthusiasts',
      description: 'Discussing the latest in technology and innovation',
      members: 1248,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
      category: 'Technology',
      privacy: 'Public',
      lastActivity: '2 hours ago'
    },
    {
      id: '2',
      name: 'Photography Club',
      description: 'Share your best shots and learn from others',
      members: 892,
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop',
      category: 'Hobbies',
      privacy: 'Public',
      lastActivity: '5 hours ago'
    },
    {
      id: '3',
      name: 'Book Lovers',
      description: 'Monthly book discussions and recommendations',
      members: 456,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop',
      category: 'Education',
      privacy: 'Private',
      lastActivity: '1 day ago'
    }
  ];

  const suggestedGroups = [
    {
      id: '4',
      name: 'Startup Founders',
      description: 'Connect with fellow entrepreneurs and startup founders',
      members: 2156,
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop',
      category: 'Business',
      privacy: 'Public'
    },
    {
      id: '5',
      name: 'Digital Nomads',
      description: 'Remote work tips and travel destinations',
      members: 3421,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=200&fit=crop',
      category: 'Lifestyle',
      privacy: 'Public'
    },
    {
      id: '6',
      name: 'Fitness Motivation',
      description: 'Stay motivated and achieve your fitness goals',
      members: 1876,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
      category: 'Health',
      privacy: 'Public'
    }
  ];

  const trendingGroups = [
    {
      id: '7',
      name: 'AI & Machine Learning',
      description: 'Exploring the future of artificial intelligence',
      members: 4523,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop',
      category: 'Technology',
      privacy: 'Public',
      trending: true
    },
    {
      id: '8',
      name: 'Sustainable Living',
      description: 'Tips for eco-friendly lifestyle choices',
      members: 2134,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&h=200&fit=crop',
      category: 'Environment',
      privacy: 'Public',
      trending: true
    }
  ];

  const GroupCard = ({ group, showJoinButton = false }: { group: any, showJoinButton?: boolean }) => (
    <Card className="hover:shadow-md transition-shadow">
      <div className="aspect-video overflow-hidden">
        <img
          src={group.image}
          alt={group.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg">{group.name}</h3>
          {group.trending && (
            <Badge className="bg-orange-100 text-orange-800">
              <TrendingUp className="h-3 w-3 mr-1" />
              Trending
            </Badge>
          )}
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{group.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {group.members.toLocaleString()} members
          </div>
          <Badge variant="secondary" className="text-xs">
            {group.category}
          </Badge>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">
            {group.privacy} • {group.lastActivity || 'Active community'}
          </span>
          {showJoinButton && (
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Join Group
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Groups</h1>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Create Group
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search groups..."
            className="pl-10 bg-white"
          />
        </div>

        <Tabs defaultValue="my-groups" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="my-groups">My Groups</TabsTrigger>
            <TabsTrigger value="discover">Discover</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
          </TabsList>

          <TabsContent value="my-groups">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Your Groups</h2>
                <p className="text-gray-500">{myGroups.length} groups</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myGroups.map((group) => (
                  <GroupCard key={group.id} group={group} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="discover">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Suggested for You</h2>
                <p className="text-gray-500">Based on your interests</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {suggestedGroups.map((group) => (
                  <GroupCard key={group.id} group={group} showJoinButton />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="trending">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Trending Groups</h2>
                <p className="text-gray-500">Most active this week</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendingGroups.map((group) => (
                  <GroupCard key={group.id} group={group} showJoinButton />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Active Communities</h3>
              <p className="text-gray-600 text-sm">Join thousands of active groups and engage with like-minded people</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Growing Network</h3>
              <p className="text-gray-600 text-sm">Discover new interests and expand your professional network</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Local & Global</h3>
              <p className="text-gray-600 text-sm">Connect with people in your area or around the world</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Groups;
