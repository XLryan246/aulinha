import React from 'react';
import './styles.css'


const BotaoSN: React.FC = () =>{
    return(
        <>
            <div className="containerbutton">
                <input type="radio" name="radio" id="opt1" />
                    <label htmlFor="opt1" className="label1">
                        <span>Sim</span>
                        </label>
                    <input type="radio" name="radio" id="opt2" />
                        <label htmlFor="opt2" className="label2">     
                            <span>Nao</span>
                        </label>
                    </div>
        </>
    );
}

export default BotaoSN;