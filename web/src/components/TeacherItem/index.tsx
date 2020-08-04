import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/49040839?s=460&u=53742adf6752d6dce21688a6d57725a4697b1fa2&v=4" alt="Vinicius Saturnino"/>
                <div>
                    <strong>Vinicius Saturnino</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusuasta da química no Ensino Médio.
                <br/><br/>
                Apaixonado por ciências, com boa prática em química adora distribuir seu conhcimento para novos alunos.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={wppIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;