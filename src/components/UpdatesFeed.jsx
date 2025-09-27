import React from 'react';
import UpdatesCard from './UpdatesCard';

// Dummy data to simulate real updates
const dummyUpdates = [
  { id: 1, name: 'John Doe', time: '2 min ago', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', message: 'High Tides observed in Calangute Beach', urgency: 9, trust: 8, likes: 12, comments: 5 },
  { id: 2, name: 'Sarah Chen', time: '15 min ago', avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d', message: 'Flooding near surrounding areas of dona paula', urgency: 2, trust: 9, likes: 12, comments: 5 }
];

const UpdatesFeed = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Recent Updates</h2>
      {dummyUpdates.map(update => (
        <UpdatesCard key={update.id} update={update} />
      ))}
    </div>
  );
};

export default UpdatesFeed;