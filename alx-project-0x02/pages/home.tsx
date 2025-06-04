import React from 'react';
import Card from '../components/common/Card';

const HomePage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Home Page</h1>
      <Card title="Card 1" content="This is the content of the first card." />
      <Card title="Card 2" content="Here is some different content for the second card." />
      <Card title="Card 3" content="Another reusable card with new content!" />
    </div>
  );
};

export default HomePage;
