import React from 'react';
import { Link } from 'react-router-dom';

import checkIcon from '../../assets/images/icons/success-check-icon.svg';

import './styles.css';

function RegisterConfirm() {
    return (
        <div className="page-container">
            <div className="confirm-content">
                <img src={checkIcon} alt="check"/>
                <h1>Cadastro salvo!</h1>
            </div>
            <p>Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp.</p>
            <Link to="/study">
                Acessar lista
            </Link>
        </div>
    );
}

export default RegisterConfirm;