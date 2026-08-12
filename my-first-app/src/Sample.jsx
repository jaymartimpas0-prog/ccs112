function Sample({ age }) {
    const handleClick = () => {
      alert('Button clicked!');
    };
  
    return (
      <div className="container mt-2">
        <div className="card shadow-sm p-4">
          <h1 className="text-primary fw-bold">Hello World</h1>
          <p className="lead">Age: {age}</p>
          <button className="btn btn-success" onClick={handleClick}>
            Click Me
          </button>
        </div>
      </div>
    );
  }
  
  export default Sample;