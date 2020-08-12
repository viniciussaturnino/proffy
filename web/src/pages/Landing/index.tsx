import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(res => {
            const { total } = res.data;

            setTotalConnections(total);
        })
    }, []);

    return (
        <div className="total-container">
            <div id="page-landing">
                <div id="page-landing-content" className="container">
                    <div className="logo-container">
                        <img src={logoImg} alt="Proffy"/>
                        <h2>Sua plataforma de estudos online.</h2>
                    </div>

                    <img 
                        src={landingImg}
                        alt="Plataforma de estudos"
                        className="hero-image"
                    />
                </div>
            </div>

            <div className="nav-container">
                <div className="text-nav">
                    <h2>Seja bem-vindo,</h2>
                    <h3>O que deseja fazer?</h3>
                </div>
                <div className="buttons-connection">
                    <div className="text-span">
                        <span className="total-connections">
                            Total de {totalConnections} conexões
                        </span>
                        <span className="total-connections">
                            já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                        </span>
                    </div>
                    
                    <div className="buttons-container">
                        <Link to="/study" className="study">
                            <img src={studyIcon} alt="Estudar"/>
                            Estudar
                        </Link>
                        <Link to="/give-classes" className="give-classes">
                            <img src={giveClassesIcon} alt="Dar aulas"/>
                            Dar aulas
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;