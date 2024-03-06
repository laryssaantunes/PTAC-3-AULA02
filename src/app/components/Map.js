import React from 'react';

const Map = () => {
    return (
        <div> 
            <iframe
            title="Localização da empresa"
            width="600"
            height="450"
            loading="lazy"
            allowFullScreen
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d308825.947355347!2d-122.59264142314429!3d37.75776206900927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1629276832229!5m2!1sen!2suk"></iframe>
        </div>
    );

    }
export default Map;