import React, { useState } from 'react';
import './LogCard.css';
import { Outlet } from 'react-router-dom';
import Logo from '../../assets/svg/icons/EventXpro.svg';
import quotes from '../../assets/svg/icons/quotes.svg';
import aramco from '../../assets/svg/icons/aramco.svg';
import owner from '../../assets/svg/icons/owner.svg';
const quoteData = [
    "The best way to predict the future is to create it.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Your limitation—it's only your imagination."
];

function LogCard() {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    const nextQuote = () => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quoteData.length);
    };

    const prevQuote = () => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex - 1 + quoteData.length) % quoteData.length);
    };

    return (
        <div className='container'>
            <div className="log-card">
                <div className="log-card-container">
                    <div className="logo">
                        <img className='logo-cust' src={Logo} alt="" />
                    </div>
                    <div className="header">
                        <h1>
                            Offer an Unforgettable <br />
                            Event Experience <br />
                            with EventXPro!
                        </h1>
                        <span className="description">
                            Choose EventXPro for an event management <br />
                            solution that is seamless, engaging, and <br />
                            secure.
                        </span>
                    </div>
                </div>
                <div className="quote-container">
                    <div className="quote">
                        <img src={quotes} alt="" />
                    </div>
                    <div className="quote-pagination">
                        <img src={aramco} alt="" />
                        <span className="quote-text">{quoteData[currentQuoteIndex]}</span>
                        <div className='owner-container'>
                                <img className='owner-icon' src={owner} alt="" />
                            <div className='owner-details'>
                                <span className='owner-name'>Adam Smith</span>
                                <span className='owner-position'>CEO at Aramco</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='indicator-container'>
                    {quoteData.map((_, index) => (
                        <span
                            key={index}
                            className={`indicator ${index === currentQuoteIndex ? 'active' : ''}`}
                            onClick={() => setCurrentQuoteIndex(index)}>
                        </span>
                    ))}
                </div>
            </div>
            <div className='outlet-container'>
                <Outlet />
            </div>
        </div>
    );
}

export default LogCard;
