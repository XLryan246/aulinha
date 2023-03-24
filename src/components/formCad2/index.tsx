import React from 'react';
import './styles.css'


const FormCadCom2: React.FC = () => {
    return (
        <>
            <div className="bg" >
                <div className="inputBox">
                    <input type="text" />
                    <span>CEP</span>
                </div>
                <div className="inputBox">
                    <input type="text" />
                    <span>Rua</span>
                </div>
                <div className="inputBox">
                    <input type="text" />
                    <span>Bairro</span>
                </div>
                <div className="inputBox">
                    <input type="text" />
                    <span>numero</span>
                </div>
                <div className="inputBox">
                    <input type="text" />
                    <span>Complemento</span>
                </div>
                <div className="inputBox">
                    <input type="text" />
                    <span>Cidade</span>
                </div>
                <div className="inputBox">
                    <input type="text" />
                    <span>Estado</span>
                </div>
            </div>
        </>
    );
}

export default FormCadCom2;