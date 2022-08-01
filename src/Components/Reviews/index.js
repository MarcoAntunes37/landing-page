import React from 'react';
import './review.css'

function Reviews() {
  const reviews=[{
    item:[{
        review: '“Put a ring on it.”',
        reviewer: 'IGN',
        avaliation: '10/10',
        reviwerPage: 'https://www.ign.com/games/elden-ring'
      },
      {
        review: '“An unmissable open-world masterpiece.”',
        reviewer: 'Gaming Bible',
        avaliation: '10/10',
        reviwerPage: 'https://www.gamingbible.co.uk/reviews/elden-ring-review-fromsoftwares-latest-is-a-modern-masterpiece-20220222'
      },
      {
        review: '“Suffering has never been as much fun”',
        reviewer: 'Games Radar',
        avaliation: '5/5',
        reviwerPage: 'https://www.gamesradar.com/elden-ring-review/',
      }
    ]
  }]

  return (
    <>      
      {reviews[0].item.map((item) => {
        return (
          <div className='review-item'>            
            <p>
              {
                item.review
              }
            </p>
            <p>
              <a href={
                item.reviwerPage
              }>
                {
                  item.reviewer
                }
              </a>
            </p>
            <p>
              {
                item.avaliation
              }
            </p>
          </div>
          )
      })}
    </>
  )
}

export default Reviews;