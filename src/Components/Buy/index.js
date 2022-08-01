import { faPlaystation, faSteam, faXbox } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import './buy.css'

function Buy() {
  const buy ={
    items:[
      {
        color: '#003697',
        icon: faPlaystation,
        name: 'Playstation 4 and Playstation 5',
        link: 'https://store.playstation.com/pt-br/concept/10000333'
      },
      {
        color: '#008746',
        icon: faXbox,
        name: 'Xbox One and Xbox Series X|S',
        link: 'https://www.xbox.com/pt-BR/games/store/elden-ring/9P3J32CTXLRZ/0010'
      },
      {
        color: '#171a21',
        icon: faSteam,
        name: 'Steam - PC',
        link: 'https://store.steampowered.com/app/1245620/ELDEN_RING/'
      }
    ]
  }

  return (
    <>        
      {
        buy.items.map((item) => {
          return (
            <a href={item.link}>
              <div className='buy-item' 
                style={{backgroundColor: item.color}}>
                <FontAwesomeIcon 
                  icon={item.icon}
                />
                <p>{item.name}</p>
              </div>
            </a>
         
            )
        })
      }
    </>
  )
}

export default Buy;