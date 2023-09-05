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
    background: isHovered ? 'black' : 'linear-gradient(to bottom, #f7f7f7, #e0e0e0)',
    color: isHovered ? 'white' : '#333',
  };

  return (
    <div
      style={cardStyle}
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 style={{ color: isHovered ? 'white' : '#666', fontSize: '24px', marginBottom: '10px' }}>
        {title}
      </h3>
      <p style={{ color: isHovered ? 'white' : '#666', fontSize: '14px' }}>{content} ⭐⭐⭐⭐⭐</p>
    </div>
  );
};

const TestimonialSlide = () => (
  <div style={{ marginTop: '20px', textAlign: 'center' }} className="wrapper">
    <h3 className="main-headings text-center">
      <span>HAPPY CUSTOMER</span>
    </h3>
    <br></br>
    <div
      style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}
      className="info"
    >
      <Card
        title="Nazish Shah"
        content="This abaya has become my go-to choice for special occasions. Kudos to the designers for creating such a masterpiece that effortlessly blends tradition with modern style."
      />
      <Card
        title="Iqra Hayat"
        content="Absolutely stunning abaya! The design and attention to detail are truly remarkable. Wearing this piece feels like wearing a piece of art. The craftsmanship is impeccable."
      />
      <Card
        title="Kalsoom Awan"
        content="The way it gracefully drapes is like a dream, making me feel elegantly poised. The attention to detail is exquisite, and the intricate patterns truly set this abaya apart."
      />
    </div>
  </div>
);

export default TestimonialSlide;
