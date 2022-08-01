import React, {useEffect, useState, useRef} from 'react';
import './video.css'
import LaunchThumb from '../../Images/Launchthumb.jpg'
import StoryThumb from '../../Images/Storythumb.jpg'
import GameplayThumb from '../../Images/Gameplaythumb.jpg'
import GameplayVideo from '../../Videos/ELDEN RING - Official Gameplay Reveal.mp4'
import StoryVideo from '../../Videos/ELDEN RING - Story Trailer.mp4'
import LaunchVideo from '../../Videos/ELDEN RING Official Launch Trailer.mp4'



function Video() {
  const [videoPlaying, setVideoPlaying] = useState(GameplayVideo);
  const videoRef = useRef();

  useEffect(() => {    
    videoRef.current?.load();
  }, [videoPlaying]);

  const handleClickGameplay = () => {
    setVideoPlaying(GameplayVideo)
  }
  const handleClickStory = () => {
    setVideoPlaying(StoryVideo)
  }
  const handleClickLaunch = () => {
    setVideoPlaying(LaunchVideo)
  }
    return(
      <>
        <div className='main-video-container'>
          <video ref={videoRef} controls className='main-video-item'>
            <source id='source' className='main-video' src={videoPlaying}/>
          </video>
        </div>
        <div className='trail-container'>
          <div className='trail-item'>
            <a onClick={handleClickGameplay}>
              <img src={GameplayThumb}/>
            </a>
          </div>
          <div className='trail-item'>
            <a onClick={handleClickStory}>
              <img src={StoryThumb}/>
            </a>
          </div>
          <div className='trail-item'>
            <a onClick={handleClickLaunch}>
              <img src={LaunchThumb}/>
            </a>
          </div>
        </div>
      </>
    )
}

export default Video;