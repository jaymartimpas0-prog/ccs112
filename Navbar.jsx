function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom px-4">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Dashboard</span>
          
          <div className="d-flex align-items-center gap-3">
            <input 
              type="search" 
              className="form-control form-control-sm" 
              placeholder="Search..." 
              style={{ maxWidth: '200px' }}
            />
            <div className="dropdown">
              <button 
                className="btn btn-outline-secondary btn-sm dropdown-toggle" 
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Admin
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;