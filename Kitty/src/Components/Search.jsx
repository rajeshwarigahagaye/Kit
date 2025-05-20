
import React, { useState } from 'react';
import './Search.css'
import { FaSearch } from "react-icons/fa";
import { MdPersonAddAlt } from "react-icons/md";



export default function Search({ data }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(data); // Initialize with all data

    const handleChange = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
        filterData(newSearchTerm);
    };

    const filterData = (term) => {
        if (!term) {
            setSearchResults(data); // Reset to original data if search term is empty
            return;
        }

        const lowercasedTerm = term.toLowerCase();
        const filtered = data.filter(item => {
            // Adjust this logic based on the structure of your data
            return (
                item.name.toLowerCase().includes(lowercasedTerm) ||
                item.description.toLowerCase().includes(lowercasedTerm) ||
                item.id.toString().includes(lowercasedTerm)
                // Add more fields to search as needed
            );
        });
        setSearchResults(filtered);
    };

    return (
        <>
            <div className='cover'>
                <input
                    className='search'
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                {/* <div>
                    {searchResults.map(item => (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>

                        </div>
                    ))}
                </div> */}

                <div className="search_icon"><FaSearch /></div>
                <div className="circle"><MdPersonAddAlt /> </div>

            </div>

        </>
    );
}
