import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../sidebar'
import pessoa from '../../img/pessoa.png'
import './styles.css'

const Header: React.FC = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSiderbar = () => setSidebar(!sidebar)


  const closeSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <div className='Container'>
      <FaBars onClick={showSiderbar} />
      <Sidebar active={sidebar} close={closeSidebar}/>
      <img src={pessoa} alt=''/>
    </div>
  )
}

export default Header
