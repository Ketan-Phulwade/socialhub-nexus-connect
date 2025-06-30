
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, MapPin, Calendar, Edit, UserPlus, MessageCircle, Image } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { userId } = useParams();
  const { user, updateProfile } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState(user?.bio || '');
  const [location, setLocation] = useState(user?.location || '');
  
  const isOwnProfile = !userId || userId === user?.id;

  const handleProfileUpdate = () => {
    if (isOwnProfile) {
      updateProfile({ bio, location });
      setIsEditing(false);
      toast({
        title: "Profile updated!",
        description: "Your profile has been successfully updated.",
      });
    }
  };

  const userPosts = [
    {
      id: '1',
      content: 'Beautiful sunset from my evening walk today! 🌅',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      timestamp: '2 days ago',
      likes: 42,
      comments: 8
    },
    {
      id: '2',
      content: 'Working on some exciting new projects. Can\'t wait to share the results! 💻',
      timestamp: '1 week ago',
      likes: 28,
      comments: 5
    },
    {
      id: '3',
      content: 'Great coffee and even better company ☕️',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop',
      timestamp: '2 weeks ago',
      likes: 35,
      comments: 12
    }
  ];

  const userPhotos = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&h=200&fit=crop'
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Cover Photo & Profile Header */}
        <Card className="mb-6">
          <div className="relative">
            {/* Cover Photo */}
            <div className="h-48 md:h-64 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-lg relative overflow-hidden">
              {user?.coverPhoto && (
                <img
                  src={user.coverPhoto}
                  alt="Cover"
                  className="w-full h-full object-cover"
                />
              )}
              {isOwnProfile && (
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  Edit Cover
                </Button>
              )}
            </div>

            {/* Profile Info */}
            <CardContent className="pt-0 px-6 pb-6">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 md:-mt-20">
                <div className="flex flex-col md:flex-row md:items-end md:space-x-4">
                  <div className="relative">
                    <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback className="text-2xl">{user?.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {isOwnProfile && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="absolute bottom-2 right-2 rounded-full w-8 h-8 p-0"
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  
                  <div className="mt-4 md:mt-0 md:mb-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{user?.name}</h1>
                    <p className="text-gray-600 mt-1">{user?.bio || 'No bio available'}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      {user?.location && (
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {user.location}
                        </div>
                      )}
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Joined {new Date(user?.joinDate || '').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2 mt-4 md:mt-0">
                  {isOwnProfile ? (
                    <Button
                      onClick={() => setIsEditing(true)}
                      variant="outline"
                      className="flex items-center"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  ) : (
                    <>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Add Friend
                      </Button>
                      <Button variant="outline">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                    </>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="flex space-x-6 mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">248</p>
                  <p className="text-sm text-gray-500">Friends</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">1.2k</p>
                  <p className="text-sm text-gray-500">Following</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">892</p>
                  <p className="text-sm text-gray-500">Followers</p>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Profile Content Tabs */}
        <Tabs defaultValue="posts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-6">
            {userPosts.map((post) => (
              <Card key={post.id} className="shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">{user?.name}</h3>
                      <p className="text-sm text-gray-500">{post.timestamp}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-800 mb-4">{post.content}</p>
                  
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post"
                      className="w-full rounded-lg object-cover max-h-96 mb-4"
                    />
                  )}
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.likes} likes</span>
                    <span>{post.comments} comments</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="photos">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Photos</h2>
                  <Button variant="outline" size="sm">
                    <Image className="h-4 w-4 mr-2" />
                    Add Photos
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {userPhotos.map((photo, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-lg">
                      <img
                        src={photo}
                        alt={`Photo ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">About</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Bio</h3>
                    {isEditing ? (
                      <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows={3}
                      />
                    ) : (
                      <p className="text-gray-600">{user?.bio || 'No bio available'}</p>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Location</h3>
                    {isEditing ? (
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-600">{user?.location || 'No location specified'}</p>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Photography</Badge>
                      <Badge variant="secondary">Technology</Badge>
                      <Badge variant="secondary">Travel</Badge>
                      <Badge variant="secondary">Hiking</Badge>
                      <Badge variant="secondary">Reading</Badge>
                    </div>
                  </div>
                  
                  {isEditing && (
                    <div className="flex space-x-2 pt-4 border-t border-gray-200">
                      <Button onClick={handleProfileUpdate} className="bg-blue-600 hover:bg-blue-700">
                        Save Changes
                      </Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Profile;
