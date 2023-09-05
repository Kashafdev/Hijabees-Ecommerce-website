import React, { useState } from 'react';

const Card = ({ title, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    background: isHovered ? 'black' : 'linear-gradient(to bottom, #f7f7f7, #e0e0e0)',
    color: isHovered ? 'white' : '#333',
    // Other styles remain the same
  };

  return (
    <div
      style={{
        ...cardStyle,
        width: '300px',
        padding: '20px',
        lineHeight: '24px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 style={{ color: isHovered ? 'white' : '#666', fontSize: '24px', marginBottom: '10px' }}>{title}</h3>
      <p style={{ color: isHovered ? 'white' : '#666', fontSize: '14px' }}>{content}</p>
    </div>
  );
};

const AboutUsCards = () => (
  <div style={{ marginTop: '20px', textAlign: 'center' }} className="wrapper">
    {/* <h1
      style={{
        fontFamily: "'Allura', cursive",
        fontSize: '52px',
        marginBottom: '60px',
      }}
    >
      About Us
    </h1> */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }} className="info">
      <Card
        title="Our Mission"
        content="At Hijabee's Abaya Marketplace, our mission is to provide a seamless platform for abaya transactions, fostering convenience and efficiency for our valued customers. We are dedicated to facilitating the process of acquiring abaya orders, ensuring utmost satisfaction and ease for abaya retailers"
      />
      <Card
        title="Our Vision"
        content="At our core, Hijabee's Abaya Marketplace envisions a world where sourcing abayas is a streamlined experience. We strive to uphold a vision where every retailer can access a platform that empowers them with the quality. Through dedication, we aim to revolutionize the way abaya businesses flourish within the industry."
      />
      <Card
        title="Our History"
        content="In the annals of Hijabee's Abaya Marketplace, our journey has been one of innovation. Born from a passion for simplifying the abaya trade, we embarked on this path with a vision to reshape the industry. From humble beginnings, we've evolved into a cornerstone of convenience for abaya retailers."
      />
    </div>
  </div>
);

export default AboutUsCards;
