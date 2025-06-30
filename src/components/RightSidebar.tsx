
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Calendar, TrendingUp } from 'lucide-react';

const RightSidebar = () => {
  const friendSuggestions = [
    {
      id: '1',
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face',
      mutualFriends: 5
    },
    {
      id: '2',
      name: 'Maria Garcia',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      mutualFriends: 3
    },
    {
      id: '3',
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face',
      mutualFriends: 8
    }
  ];

  const trendingTopics = [
    { tag: '#TechNews', posts: '2.1k posts' },
    { tag: '#Photography', posts: '1.8k posts' },
    { tag: '#Travel', posts: '3.2k posts' },
    { tag: '#Fitness', posts: '1.5k posts' },
    { tag: '#Food', posts: '2.7k posts' }
  ];

  const upcomingEvents = [
    {
      id: '1',
      title: 'Tech Meetup',
      date: 'Tomorrow, 7:00 PM',
      attendees: 45
    },
    {
      id: '2',
      title: 'Photography Workshop',
      date: 'Saturday, 2:00 PM',
      attendees: 28
    },
    {
      id: '3',
      title: 'Book Club Meeting',
      date: 'Sunday, 4:00 PM',
      attendees: 12
    }
  ];

  return (
    <div className="space-y-6">
      {/* Friend Suggestions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <UserPlus className="h-5 w-5 mr-2" />
            People You May Know
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {friendSuggestions.map((friend) => (
            <div key={friend.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={friend.avatar} alt={friend.name} />
                  <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{friend.name}</p>
                  <p className="text-xs text-gray-500">{friend.mutualFriends} mutual friends</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                Add
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Trending
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div key={index} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md cursor-pointer">
              <div>
                <p className="font-medium text-sm text-blue-600">{topic.tag}</p>
                <p className="text-xs text-gray-500">{topic.posts}</p>
              </div>
              <Badge variant="secondary" className="text-xs">
                {index + 1}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <h4 className="font-medium text-sm">{event.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{event.date}</p>
              <p className="text-xs text-blue-600 mt-1">{event.attendees} attending</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default RightSidebar;
