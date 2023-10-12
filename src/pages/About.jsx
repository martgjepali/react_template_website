const About = () => {
    return (
      <div style={pageStyle}>
        <h1 style={headingStyle}>About Us</h1>
        <p style={paragraphStyle}>
          Welcome to our company! We are a software and mobile app development company dedicated to creating innovative solutions that empower businesses and individuals. With a focus on cutting-edge technologies and user-centric design, we transform ideas into high-quality software products and mobile applications.
        </p>
      </div>
    );
  };
  
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  };
  
  const headingStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
  };
  
  const paragraphStyle = {
    fontSize: '18px',
    maxWidth: '600px',
    textAlign: 'center',
  };
  
  export default About;