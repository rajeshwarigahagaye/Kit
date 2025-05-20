import React, { useState } from 'react';
import './ComponentSwitcher.css';
import CatList from './innercomponents/CatList';;
import DogList from './innercomponents/DogList.jsx';
import TigerList from './innercomponents/TigerList.jsx';
import CapibaraList from './innercomponents/CapibaraList.jsx';
import SquirrelList from './innercomponents/SquirrelList.jsx';
import LionList from './innercomponents/LionList.jsx';
import LamaList from './innercomponents/LamaList.jsx';
import MainContent from './MainContent.jsx';
const Profile = [
    {
        Component: 'Cat',
        name: 'Cats',
        imageurl: 'https://i.pinimg.com/736x/c8/b0/63/c8b0634f1b51a767d5a239b41b9f8bb8.jpg',

    },
    {
        Component: 'Dog',
        name: 'Dogs',
        imageurl: 'https://i.pinimg.com/736x/a2/c0/c5/a2c0c5f1a72f34612100fee03eee4740.jpg',

    },
    {

        Component: 'Capibara',
        name: 'Capibaras',
        imageurl: 'https://i.pinimg.com/736x/de/b1/e1/deb1e18ac69ce5487fe67aceec8ac55c.jpg',

    },
    {
        Component: 'Lion',
        name: 'Lions',
        imageurl: 'https://i.pinimg.com/736x/ec/7c/bf/ec7cbfa336232e6e3f45a0e88911c12c.jpg',
    },
    {
        Component: 'Lama',
        name: 'Lamas',
        imageurl: 'https://i.pinimg.com/736x/d7/89/21/d7892104afa85f406f7d4f2f2e58965a.jpg',
    },
    {
        Component: 'Tiger',
        name: 'Tigers',
        imageurl: 'https://i.pinimg.com/736x/ab/e6/a8/abe6a8a7193a6dc0d84ad19350e1c689.jpg',
    },
    {
        Component: 'Squirrel',
        name: 'Squirrels',
        imageurl: 'https://i.pinimg.com/736x/d2/1c/f4/d21cf4d899ed6176f20994d35c740af0.jpg',
    }
];
function ComponentSwitcher() {
    const [activeComponent, setActiveComponent] = useState(' ');


    const handleButtonClick = (componentName) => {
        setActiveComponent(componentName);
    };

    // Render the appropriate component based on the state.
    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 'Cat':
                return <CatList />;
            case 'Dog':
                return <DogList />;
            case 'Capibara':
                return <CapibaraList />;
            case 'Lion':
                return <LionList />;
            case 'Lama':
                return <LamaList />;
            case 'Tiger':
                return <TigerList />;
            case 'Squirrel':
                return <SquirrelList />;
            default:
                return <MainContent />; // Or perhaps a default "not found" component
        }
    };

    return (


        <>
            <div className='buttons'>
                {Profile.map((profile) => (
                    <button
                        key={profile.Component}
                        onClick={() => handleButtonClick(profile.Component)}
                    >
                        <div className="btn">
                            <div className="c1">
                                <img className="image" src={profile.imageurl} alt={profile.name} />
                            </div>
                            {profile.name}

                        </div >
                    </button>
                ))
                }
                <div className="contentImg">
                    {renderActiveComponent()}
                </div>
            </div >

        </>
    );
}

export default ComponentSwitcher;