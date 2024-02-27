import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import '../../styles/home/home.css'
import logo from '../../assets/logo.png'
import userft from '../../assets/userft.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../context/UserContext";

const Home = () => {
    const { userInfo, setUserInfo } = useUser();
    const [end, setEnd] = useState('');
    const [tel, setTel] = useState('');
    const [erro, setErro] = useState(true)
    
    const navigate = useNavigate()

    const hundleSubmit = (event) => {
        event.preventDefault()
        if (end === '' || tel === '') {
            setErro('esse campo é obrigatório!')
        } else {

            localStorage.setItem('Tel', tel);
            localStorage.setItem('End', end);

            setTel(localStorage.getItem('Tel'));
            setEnd(localStorage.getItem('End'));

            navigate('/Exp')

        }
    }

    return (
        <div className="container-home">
            <header>
                <div className="row-header-h">
                    <img src={logo} className="img-h" />
                    <div className="row-titles-header">
                        <div className="t1-header">
                            <button className="p-header1">Dados pessoais</button>
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
                            <button className="p-header">Resumo</button>
                        </div>
                        <div className="t1-header">
                            <button className="p-header">Seções Extras</button>
                        </div>
                        <div className="t1-header">
                            <button className="p-header">Finalizar</button>
                        </div>
                        <div className="t1-header">
                            <button className="btn-logout">
                                <FontAwesomeIcon icon={faRightFromBracket} style={{ color: 'white', fontSize: '20px', fontWeigh: 100 }} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="center-container-hm">
                <div className="sub-container-hm">
                    <div className="div-subctn-hm">

                        <form onSubmit={hundleSubmit}>
                            <div className="row-title-hm">
                                <h1 className="p-title-hm">Vamos começar com seus dados <p className="resumo-color">pessoais, {userInfo.nome}</p></h1>
                            </div>
                            <div className="ctn1-hm">
                                <div className="row-img-hm">
                                    <img src={userft} className="img-hm" />
                                </div>

                                <div className="column-rigth1-hm">
                                    <div className="row-subtitle-hm">
                                        <p className="p-subtitle-hm">Inclua seu nome completo e seu endereço de e-mail para que os empregadores entrem em contato com você. Outros campos são opcionais.</p>
                                    </div>
                                    <div className="row-prin-input-hm">
                                        <div className="column1-hm">
                                            <p className="p-inp-hm">Nome</p>
                                            <input className="input-column1-hm" type="text" placeholder="p. ex. Patrícia" value={userInfo.nome}/>
                                        </div>

                                        <div className="column1-hm">
                                            <p className="p-inp-hm">Sobrenome</p>
                                            <input className="input-column1-hm" type="text" placeholder="p. ex. Silva" value={userInfo.sobrenome}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column2-inp-hm">
                                <p className="p-inp-hm">Endereço</p>
                                <input onChange={(e) => setEnd(e.target.value)} className="inp-long-hm" type="text" placeholder="p. ex. Rua Alivio Martins Castro" />
                            </div>
                            <span className='span' style={{marginLeft:'20px'}}>{end ? '' : erro}</span>

                            <div className="row3-inp-hm">
                                <div className="column3-inp-hm">
                                    <p className="p-inp-hm">Número de telefone</p>
                                    <input onChange={(e) => setTel(e.target.value)} className="inp3-hm" type="number" placeholder="p. ex. xx xxxx xxxxx" />
                                    <span style={{display:'grid'}} className='span'>{tel ? '' : erro}</span>
                                </div>
                                
                                <div className="column3-inp-hm">
                                    <p className="p-inp-hm">Endereço de e-mail</p>
                                    <input className="inp3-hm" type="text" placeholder="p. ex. patriciasilva123@gmail.com" value={userInfo.email} />
                                </div>
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
export default Home