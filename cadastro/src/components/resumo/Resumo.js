import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../styles/resumo/resumo.css'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../context/UserContext";


const Resumo = () => {
    const { userInfo, setUserInfo } = useUser();
    const [inp, setInp] = useState('');
    const [erro, setErro] = useState(true);

    const navigate = useNavigate()

    const hundleSubmit = (event) => {
        event.preventDefault()

        if (inp === '') {
            setErro('Esse campo é obrigatório!')
        }else{
            localStorage.setItem('Resumo', inp);

            setInp(localStorage.getItem('Resumo'));

            navigate('/Finalizar')
        }

    }

    return (
        <div>
            <header>
                <div className="row-header-h">
                    <img src={logo} className="img-h" />
                    <div className="row-titles-header">
                        <div className="t1-header">
                            <button className="p-header">Dados pessoais</button>
                        </div>
                        <div className="t1-header">
                            <button className="p-header">Experiência profissional</button>
                        </div>
                        <div className="t1-header">
                            <button className="p-header">Formação Acadêmica</button>
                        </div>
                        <div className="t1-header">
                            <button className="p-header">Habilidades e Competências</button>
                        </div>
                        <div className="t1-header">
                            <button className="p-header1">Resumo</button>
                        </div>
                        <div className="t1-header">
                            <button className="p-header">Seções Extras</button>
                        </div>
                        <div className="t1-header">
                            <button className="p-header">Finalizar</button>
                        </div>
                        <div className="t1-header">
                            <button className="btn-logout">
                                <FontAwesomeIcon icon={faRightFromBracket} style={{ color: 'white', fontSize: '20px', fontWeigh:100 }} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="center-container-ex">
                <div className="sub-container-ex">
                    <div className="div-subctn-ex">

                    <form onSubmit={hundleSubmit}>
                        <div className="row-title-r">
                            <h1 className="p-title-hm">Adicione um <p className="resumo-color">resumo {userInfo.nome}</p></h1>
                        </div>
                        <div className="ctn1-hm">

                            <div className="column-rigth1-hm">
                                <div className="row-subtitle-hm">
                                    <p className="p-subtitle-hm">Descreva sua experiência profissional ou objetivo em algumas frases.</p>
                                </div>

                            </div>
                        </div>
                        
                        <div className="row-inp-comp">
                            <input onChange={(e) => setInp(e.target.value)} type="text" className="inp-comp" placeholder="Conte sobre você profissionalmente."/>
                            <span style={{ display: 'grid' }} className='span'>{inp ? '' : erro}</span>
                        </div>
                        <div className="row-btn-hm">
                            
                                <button className="btn-enviar-glob">Continuar</button>
                            
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Resumo