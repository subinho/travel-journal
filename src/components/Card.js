import React from 'react';

export default function Card(props) {
  return (
      <div className='card'>
          <div>
                <img src={props.image} alt='' className='card-image'/>
          </div>
          <div className='card-info'>
              <div className='card-info-location'>
                <p className='card-info-location-title'>{props.location}</p>
                <p><a href={props.googleMaps} target='_blank'>View on google maps</a></p>
              </div>
              <div className='card-info-description'>
                <h2 className='card-info-description-title'>{props.title}</h2>
                <p><strong>{props.startDate} - {props.endDate}</strong></p>
                <p className='card-info-description-description'>{props.description}</p>
              </div>
          </div>
          
      </div>
  );
}
