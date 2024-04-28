import React from 'react';
import './logIn.css';

const ConstructionPage = () => {
    return (
        <div className="construction-container">
            <div className="construction-content">
                <h1>Under Construction</h1>
                <p>Sorry, this page is currently under construction. We're working hard to bring it to you soon!</p>
                <div className="construction-animation">
                    <div className="construction-cone"></div>
                    <div className="construction-light"></div>
                    <div className="construction-caution"></div>
                </div>
            </div>
        </div>
    );
}

export default ConstructionPage;
