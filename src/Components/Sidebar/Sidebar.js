import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';

function SubMenu({ item,id }) {

    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);
    return (
        <div>
            <Link to={item.path} className="navLink" onClick={item.subNav && showSubnav} id = {id}>
                <div className="side-icons">
                    {item.icon}
                </div>
                <div className="side-label">{item.title}</div>
                <div className="sub-icon">
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </Link>
            <div className="submenu">
            {subnav && item.subNav.map((item, index) => {
                return <div>
                    <Link to={item.path} key={index} className="submenu-link">
                        <div className="subside-icons">
                            {item.icon}
                        </div>
                        <div className="subside-label">{item.title}</div>
                    </Link>
                </div>
            })}
            </div>
        </div>
    )
}

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar-nav">
                <h1>Logo Here</h1>
                <div className="sidebar-wrap">
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} id = {"side"+index}/>;
                    })}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
