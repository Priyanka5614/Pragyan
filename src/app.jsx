import React from 'react';
import Header from './components/Header';
import Map from './components/Map';
import UpdatesFeed from './components/UpdatesFeed';
import FloatingActionButton from './components/FloatingButton';

function App() {
  return (
    // The main container with a light gray background
    <div className="bg-gray-100 min-h-screen font-sans">
      <Header />
      <main>
        <Map />
        <UpdatesFeed />
      </main>
      <FloatingActionButton />
    </div>
  );
}

export default App;