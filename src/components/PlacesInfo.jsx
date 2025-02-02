import React from 'react';

const PlaceInfo = ({ place }) => {
  return (
    <div>
      <h2>{place.name}</h2>
      <p>Date visited: {place.date}</p>
      {place.images.map((img, index) => (
        <img key={index} src={img} alt={place.name} style={{ width: '100px', margin: '5px' }} />
      ))}
    </div>
  );
};

export default PlaceInfo;
