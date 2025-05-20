import React from 'react'
import ComponentSwitcher from '../ComponentSwitcher'

export default function Explore() {
    return (
        <>
            <div className="animalsCards">
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
            </div>
        </>
    )
}

