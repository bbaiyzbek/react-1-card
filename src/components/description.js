import React from 'react';

const CardDesc = () => {
    return (
        <div className="card-desc">
             <h2>Always in style!</h2>
            <div>
                <p>The standard chunk of Lorem ipsum below for those interested.
                The standard chunk of for those interested.
                </p>
            </div>
            <div>
                <p><span className="bold-price">$ 249.99</span>/<span className="line-price">$ 249.99</span></p>
            </div>
            <div><p className="stars">&#9733;&#9733;&#9733;&#9733;<span className="grey-star">&#9733;</span></p></div>
        </div>
    );
}

export default CardDesc;

