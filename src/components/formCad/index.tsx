import React from 'react';
import './styles.css'


const FormCadCom: React.FC = () =>{
    return(
        <>
            <div className="bg" >
                <div className="inputBox">
                    <input type="text" />
                    <span>Nome</span>
                </div>
                <div className="inputBox">
                    <input type="text" />
                    <span>CPF</span>
                </div>
                <div className="inputBox">
                    <input type="text" />
                    <span>telefone</span>
                </div>
            </div>
        </>
    );
}

export default FormCadCom;