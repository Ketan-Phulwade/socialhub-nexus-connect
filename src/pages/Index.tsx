
import Layout from '../components/Layout';
import NewsFeed from '../components/NewsFeed';
import PostComposer from '../components/PostComposer';
import RightSidebar from '../components/RightSidebar';
import Stories from '../components/Stories';

const Index = () => {
  return (
    <Layout>
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 max-w-2xl mx-auto px-4 py-6">
          <Stories />
          <PostComposer />
          <NewsFeed />
        </div>
        
        {/* Right Sidebar */}
        <div className="hidden xl:block w-80 p-4">
          <RightSidebar />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
