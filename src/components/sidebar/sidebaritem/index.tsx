import React, { ReactElement } from 'react'
import './styles1.css'

interface SidebarItemProps {
  Icon: React.ElementType;
  Text: string;
}

const SidebarItem = ({ Icon, Text }: SidebarItemProps): ReactElement => {
  return (
    <div className="Container">
      <Icon />
      {Text}
    </div>
  );
};

export default SidebarItem;
