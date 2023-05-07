import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/hritik-dubey/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/hritik289" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/hritik.d28/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials