import React from 'react'
import './styles2.css'
import { 
  FaTimes, 
  FaUserPlus,
  FaUserFriends
} from 'react-icons/fa'

import SidebarItem from './sidebaritem'
import logo from '../../img/logo.png';

interface SidebarProps {
  active: boolean;
  close: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ active, close }) => {

  return (
    <div className={`Container ${active ? 'active': ''}`}>
      <FaTimes onClick={close} />  
      <img src={logo} alt=""></img>
      <div className='Content'>
        <SidebarItem Icon={FaUserPlus} Text="Cadastro" />
        <SidebarItem Icon={FaUserFriends} Text="Meus Clientes" />
      </div>
    </div>
  )
}

export default Sidebar
