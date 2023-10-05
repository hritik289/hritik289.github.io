import React from 'react'
import './portfolio.css'
import img1 from '../../assets/p1.jpg'
import img2 from '../../assets/p2.jpg'
import img3 from '../../assets/p3.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>Share your Covid Story Blog Website</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/hritik289/Share-Your-Covid-Story" className='btn'>Github</a>
            <a href="https://dribbble.com/hritik-dubey" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img2} alt="img1" />
          </div>
          <h3>Hybrid Sentiment Analysis and Recommendation Engine</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/hritik289/Sentiment-Analysis" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/hritik-dubey" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img3} alt="img1" />
          </div>
          <h3>Penetration Testing and Vulnerability Analysis</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/hritik289/SecureWeb" className='btn'>Github</a>
            <a href="https://dribbble.com/hritik-dubey" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio