import React from 'React';
import Navbar from 'Navigation/Navbar';
import Header from 'Header';
import Footer from 'Footer';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container">
         Add your page content here 
        <h1>Welcome to my webpage!</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;