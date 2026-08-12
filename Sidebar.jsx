function Sidebar({ activeTab, setActiveTab }) {
    return (
      <div 
        className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white" 
        style={{ width: '250px', minHeight: '100vh' }}
      >
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-4 fw-bold text-primary">My App</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <button 
              className={`nav-link w-100 text-start ${activeTab === 'dashboard' ? 'active' : 'text-white'}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button 
              className={`nav-link w-100 text-start ${activeTab === 'users' ? 'active' : 'text-white'}`}
              onClick={() => setActiveTab('users')}
            >
              Users
            </button>
          </li>
          <li>
            <button 
              className={`nav-link w-100 text-start ${activeTab === 'products' ? 'active' : 'text-white'}`}
              onClick={() => setActiveTab('products')}
            >
              Products
            </button>
          </li>
          <li>
            <button 
              className={`nav-link w-100 text-start ${activeTab === 'settings' ? 'active' : 'text-white'}`}
              onClick={() => setActiveTab('settings')}
            >
              Settings
            </button>
          </li>
        </ul>
        <hr />
        <div>
        </div>
      </div>
    );
  }
  
  export default Sidebar;