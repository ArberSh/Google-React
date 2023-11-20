import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps'

export default function Home() {
  return (
    <div>
        <div className='home__header'>
            <div className='home__headerLeft'>
                <Link to='/about'>About</Link>
                <Link to='/about'>Store</Link>
            </div>
            <div className='home__headerRight'>
                 <Link to='/about'>Gmail</Link>
                 <Link to='/about'>Images</Link>
                 <AppsIcon/>   
            </div>
        </div>

        <div className='home__body'>

        </div>
    </div>
  )
}
