function Border({ children, title }) {
    return (
      <div className="card shadow-sm border-1 rounded-3 mb-4">
        {title && (
          <div className="card-header bg-white border-bottom py-3">
            <h5 className="mb-0 fw-bold text-dark">{title}</h5>
          </div>
        )}
        <div className="card-body p-4">
          {children}
        </div>
      </div>
    );
  }
  
  export default Border;