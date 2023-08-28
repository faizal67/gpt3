import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-headding'>
        <h1 className='gradient__text'>
        Do you want to step in to the future before others
        </h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-linkes_logo'>
          <img src={gpt3Logo} alt="gpt3logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>links</h4>
          <p>overance</p>
          <p>overance</p>
          <p>overance</p>
          <p>overance</p> 
        </div>
      </div>
    </div>
  )
}

export default Footer