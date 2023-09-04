import React from "react";
import WelcomePicture from '../assets/img/home_welcome.svg'


function HomeSection(){
    return(
        <main id="main-section">
        <h2 id="main-section-title">INICIO</h2>
        <div id="main-section-content">
            <p class="home-user-welcome">
                ¡Te damos la bienvenida!
            </p>
            <div class="home-user-welcome-img">
                <img src={WelcomePicture} alt="welcome-picture"></img>
            </div>  
        </div>
        </main>
    );
}

export default HomeSection;

