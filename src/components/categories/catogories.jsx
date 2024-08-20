import React, { useState } from "react";
import './categories.css'

const Categories = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Selected: ${selectedOption}, Search Query: ${searchQuery}`);
    };

    return (
        <div className="categories-container-main">
            <div className="search-bar-container">
                <form onSubmit={handleSubmit}>
                    <select value={selectedOption} onChange={handleSelectChange}>
                        <option value="">Select an option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>

                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleInputChange}
                        placeholder="Search..."
                    />

                    <button type="submit">Submit</button>
                </form></div>
            <div className="category-latest-entry-container">
                <div className="latest-entry-container">
                    <div className="items-categories">
                        <p>vegetables</p>
                    </div>
                    <div className="items-categories">
                        <p>fruit</p>
                    </div>
                    <div className="items-categories">
                        <p>top rated entries</p>
                    </div>
                </div>
                <div className="category-container-aside">
                    <select
                        value={selectedOption}
                        onChange={handleSelectChange}
                        style={{ width: '200px', height: '150px', overflowY: 'scroll' }}
                        size="5"
                    >
                        <option value="">Select an option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="option4">Option 4</option>
                        <option value="option5">Option 5</option>
                        <option value="option6">Option 6</option>
                        <option value="option7">Option 7</option>
                        <option value="option8">Option 8</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default Categories;