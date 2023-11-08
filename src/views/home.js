import React from 'react'

import { Helmet } from 'react-helmet'

import TestimonialCard1 from '../components/testimonial-card1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Political Misty Fox</title>
        <meta property="og:title" content="Political Misty Fox" />
      </Helmet>
      <TestimonialCard1
        name="Lexi ❤️"
        role="Naughty Secret 😊"
        quote="My 2 year old OnlyFans paid page is free for those using this link 👇 💕"
        button="Free Trial OnlyFans (Click Here)"
        link_button="https://onlyfans.com/action/trial/xk6k9a3g7pwct6arzathewylu6bso9du"
        picture_src="/fc459f9f-091e-4ae3-a3d7-aa229732023c-200w.jpg"
        rootClassName="rootClassName1"
      ></TestimonialCard1>
    </div>
  )
}

export default Home
