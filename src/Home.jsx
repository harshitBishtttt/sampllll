import React from 'react';

function Home() {
  const token = localStorage.getItem('authToken');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Welcome to the Home Page</h2>
      
      <button
        onClick={() => {
          window.location.href = '/';
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
