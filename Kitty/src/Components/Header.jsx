
import React, { useState } from 'react';
import './Header.css'
import { FaHome } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import cat_Logo from "/images/cat_Logo.jpeg"
import { MdMessage } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
import { IoMdCreate } from "react-icons/io";
import Home from './HeadComponent/Home';
import Explore from './HeadComponent/Explore';
import Create from './HeadComponent/Create';
import Message from './HeadComponent/Message';
import Notifications from './HeadComponent/Notifications';
const iconsData = [
    { name: 'Home', Component: FaHome },
    { name: 'Explore', Component: MdOutlineExplore },
    { name: 'Create', Component: IoMdCreate },
    { name: 'Message', Component: MdMessage },
    { name: 'Notifications', Component: MdNotifications }
]
export default function Header() {
    const [activeComponent, setActiveComponent] = useState(' ');
    const handledivClick = (componentName) => {
        setActiveComponent(componentName);
    };


    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 'Home':
                return <Home />;
            case 'Explore':
                return <Explore />;
            case 'Create':
                return <Create />;
            case 'Message':
                return <Message />;
            case 'Notifications':
                return <Notifications />;
            default:
                return null;
        }
    };


    return (
        <>

            <div className='head'>
                <div className="logo">
                    <img src={cat_Logo} alt="cat" />
                </div>
                <div className="nav1">
                    {iconsData.map((iconInfo) => (
                        <div id='nav'><iconInfo.Component
                            key={iconInfo.name}
                            size={38}
                            onClick={() => handledivClick(iconInfo.name)}
                        /></div>
                    ))}
                </div >

            </div>
            <div className="HeadContent">
                {renderActiveComponent()}
            </div>
        </>
    )
}
