import React from 'react';
import './platform.css'
import { faPlaystation, faXbox, faSteam } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Platforms() {
  const platforms = [{
      items:[{
        name: 'Playstation 4',
        icon: faPlaystation,
        color: '#003697'
        },
        {
          name: 'Playstation 5',
          icon: faPlaystation,
          color: '#003697'
        },
        {
          name: 'Xbox One',
          icon: faXbox,
          color: '#008746'
        },
        {
          name: 'Xbox Series X/S',
          icon: faXbox,
          color: '#008746'
        },
        {
          name: 'Steam',
          icon: faSteam,
          color: '#171a21'
        }
      ]
    }
  ]
  return (
    <>
      {platforms[0].items.map((item) => {
        return (
          <div className='platform-item' style={{backgroundColor: item.color}}>
            <p>
              <FontAwesomeIcon icon={
                item.icon
              }
              />
            </p>
            <p>
              {
                item.name
              }
            </p>
          </div>
          )
        })
      }
    </>
  )
}

export default Platforms;