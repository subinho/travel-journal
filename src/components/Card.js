import React from 'react';

export default function Card(props) {
  return (
      <div className='card'>
          <div>
                <img src={props.image} alt='' className='card-image'/>
          </div>
          <div className='card-info'>
              <div className='card-info-location'>
                <span className='card-info-location-title'>{props.location}</span>
                <span className='card-info-google-maps'><a href={props.googleMaps} target='_blank'>View on google maps</a></span>
              </div>
              <div className='card-info-description'>
                <h2>{props.title}</h2>
                <p><strong>{props.startDate} - {props.endDate}</strong></p>
                <span>{props.description}</span>
              </div>
          </div>
          
      </div>
  );
}
