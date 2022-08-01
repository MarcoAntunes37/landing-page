import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import './footer.css'

const social ={
  items:[
    {
      link: 'https://www.facebook.com/bandainamcoplay',
      icon: faFacebook
    },
    {
      link: 'https://www.instagram.com/bandaicollect',
      icon: faInstagram
    },
    {
      link: 'https://twitter.com/bandaicollect',
      icon: faTwitter
    },
    {
      link: 'https://www.youtube.com/bntca',
      icon: faYoutube
    }
  ]
 
}

function Footer() {
  return (
    <div>
      <div className='social-container'>
        {
          social.items.map((item) => {
            return(
              <div className='social-item'>
                  <a href={item.link}>
                    <FontAwesomeIcon className='icon' 
                      icon={item.icon} 
                      size="2x"
                    />
                  </a>
              </div>
            )
          })
        }
      </div>
      <div className='rights-container'>
        <h4>TM & © 2022 Bandai Namco</h4>
      </div>
    </div>
  )
}

export default Footer;