import React from 'react';

function NavBar({onPrevious, onNext}) {
    return (
        <div className="NavBar">
            <button onClick={onPrevious}>Précédent</button>
            <button onClick={onNext}>Suivant</button>
        </div>
    );
}

export default NavBar;