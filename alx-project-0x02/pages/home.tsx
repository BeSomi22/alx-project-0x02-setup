import React, {useState} from 'react';
import Card from "@/components/common/Card";
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';

const HomePage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: 'Card 1', content: 'This is the content of the first card.' },
    { title: 'Card 2', content: 'Different content for the second card.' },
  ]);

  const handleAddPost = (title: string, content: string) => {
    setPosts([{ title, content }, ...posts]);
  };

  return (
    <div className="p-8">
      <Header/>
      <h1 className="text-2xl font-bold mb-6">Home Page</h1>

      <button
        onClick={() => setModalOpen(true)}
        className="mb-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Add New Post
      </button>

      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}

      <PostModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default HomePage;

