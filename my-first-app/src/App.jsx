import { useState } from 'react'
import Sidebar from './layout/Sidebar'
import Navbar from './layout/Navbar'
import Sample from './Sample'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Sample age={21} />;
      case 'users':
        return <div className="card p-4"><h3>Users Page</h3></div>;
      case 'products':
        return <div className="card p-4"><h3>Products Page</h3></div>;
      case 'settings':
        return <div className="card p-4"><h3>Settings Page</h3></div>;
      default:
        return <Sample age={21} />;
    }
  };

  return (
    <div className="d-flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-grow-1 min-vh-100 bg-light">
        <Navbar />
        <div className="p-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;