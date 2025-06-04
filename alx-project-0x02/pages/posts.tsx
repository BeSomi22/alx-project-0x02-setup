import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import { PostProps } from '@/interfaces';
import PostCard from '@/components/common/PostCard';

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(()=>{
    const  fetchPosts = async ()=>{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      const data = await response.json();

      const formattedPosts: PostProps[] = data.map((post: any)=>({
        userId: post.useId,
        title: post.title,
        content: post.body,
      }));
      setPosts(formattedPosts);
    };
    fetchPosts();
  },[])

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Posts Page</h1>
        {posts.map((post, index)=>(
          <PostCard key={index} userId={post.userId} title={post.title} content={post.content}/>
        ))}
      </main>
    </>
  );
};

export default PostsPage;
