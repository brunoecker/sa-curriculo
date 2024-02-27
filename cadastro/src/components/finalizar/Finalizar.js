import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../styles/finalizar/finalizar.css'
import logo from '../../assets/logo.png'
import ftuser from '../../assets/userft.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../context/UserContext";


const Finalizar = () => {
    const { userInfo, setUserInfo } = useUser();
    const cargo = localStorage.getItem('Cargo');
    const empregador = localStorage.getItem('Empregador');
    const cidade = localStorage.getItem('Cidade');
    const estado = localStorage.getItem('Estado');
    const mesIexp = localStorage.getItem('MesIexp')
    const anoIexp = localStorage.getItem('AnoIexp')
    const mesFexp = localStorage.getItem('MesFexp')
    const anoFexp = localStorage.getItem('AnoFexp')
    const resumo = localStorage.getItem('Resumo')
    const tel = localStorage.getItem('Tel')
    const end = localStorage.getItem('End')
    const listaHabilidades = JSON.parse(localStorage.getItem('listaHabilidades')) || [];

    const [background, setBackground] = useState("#c3cbe9");

    const navigate = useNavigate()

    const Logout = () =>{
        localStorage.clear()
        navigate('/Login')
    }
    const backRed = () => {
        
        setBackground("#fa5757");
    };
    
    const padrao = () => {
        
        setBackground("#c3cbe9");
    };

    const backGreen = () => {
        
        setBackground("#65fa57");
    };

    const backBlue = () => {
        
        setBackground("#5a57fa");
    };

    const backYellow = () => {
        
        setBackground("#f7fa57");
    };
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
                            <button className="p-header">Resumo</button>
                        </div>
                        <div className="t1-header">
                            <button className="p-header">Seções Extras</button>
                        </div>
                        <div className="t1-header">
                            <button className="p-header1">Finalizar</button>
                        </div>
                        <div className="t1-header">
                            <button className="btn-logout" onClick={Logout}>
                                <FontAwesomeIcon icon={faRightFromBracket} style={{ color: 'white', fontSize: '20px', fontWeigh: 100 }} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="center-container-ex">
                <div className="sub-container-f">

                    <div className="ctn-left-f" style={{ background }}>
                        <div className="div-center-left-f">
                            <div className="row-img-f">
                                <img src={ftuser} />
                            </div>

                            <div className="column1-left-f">
                                <div className="row1-left-f">
                                    <p className="p-title-left-f">Contato</p>
                                </div>


                                <div className="row1-inf-left">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <div className="p-left-f">
                                        <p className="p-inf-left-f">{end}</p>
                                    </div>
                                </div>

                                <div className="row1-inf-left">
                                    <FontAwesomeIcon icon={faPhone} />
                                    <div className="p-left-f">
                                        <p className="p-inf-left-f">{tel}</p>
                                    </div>
                                </div>

                                <div className="row2-inf-left">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <div className="p-left-f">
                                        <p className="p-inf-left-f"> {userInfo.email} </p>
                                    </div>
                                </div>


                            </div>
                            <div className="column1-left-f">
                                <div className="row1-left-f">
                                    <p className="p-title-left-f">Habilidades e Competências</p>
                                </div>

                                <div className="column1-inf-left-f">
                                    <div className="p-inf-left-f"><ul style={{marginLeft:'17px'}}>
                                        {listaHabilidades.map((habilidade, index) => (
                                            <li key={index} style={{ fontFamily: 'Georgia', marginTop: '10px' }}>
                                                {habilidade}
                                            </li>
                                        ))}
                                    </ul></div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ctn-rigth-f">
                        <div className="row-name-right-f" >
                            <p>{userInfo.nome} {userInfo.sobrenome}</p>
                        </div>
                        <div className="row-infR-right-f">
                            <p className="p-title-left-f">Resumo</p>
                            <p>{resumo}</p>
                        </div>

                        <div className="row-inf-right-f">
                            <p className="p-title-left-f">Experiência profissional</p>
                            <div style={{ display: 'flex', marginTop: '5px' }}>

                                <p className="p-inf1-right-f">{cargo}</p>
                                <p className="p-inf2-right-f">{mesFexp}/{anoFexp} - {mesIexp}/{anoIexp}</p>

                            </div>
                            <div style={{ display: 'flex', marginTop: '5px' }}>

                                <p className="p-inf3-right-f"> {empregador} - </p>
                                <p className="p-inf4-right-f"> {cidade}, </p>
                                <p className="p-inf4-right-f">  {estado}</p>

                            </div>

                        </div>

                        <div className="row-inf-right-f">
                            <p className="p-title-left-f">Formação acadêmica</p>
                            <div style={{ display: 'flex', marginTop: '5px' }}>

                                <p className="p-inf6-right-f">{cargo}, </p>
                                <p className="p-inf5-right-f"> {cidade}</p>
                                <p className="p-inf7-right-f">{mesFexp}/{anoFexp} - {mesIexp}/{anoIexp}</p>

                            </div>
                            <div style={{ display: 'flex', marginTop: '5px' }}>

                                <p className="p-inf3-right-f"> {empregador} - </p>
                                <p className="p-inf4-right-f"> {cidade}, </p>
                                <p className="p-inf4-right-f">  {estado}</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-btn-color">
                <button className="btn-color" onClick={backRed} style={{padding:'20px', background:'#fa5757', cursor:"pointer"}}>
                </button>
                
                <button className="btn-color" onClick={padrao} style={{padding:'20px', background:'#c3cbe9', cursor:"pointer"}}>
                </button>
                
                <button className="btn-color" onClick={backGreen} style={{padding:'20px', background:'#65fa57', cursor:"pointer"}}>
                </button>

                <button  className="btn-color" onClick={backBlue} style={{padding:'20px', background:'#5a57fa', cursor:"pointer"}}>
                </button>

                <button className="btn-color" onClick={backYellow} style={{padding:'20px', background:'#f7fa57', cursor:"pointer"}}>
                </button>

                </div>
            </div>
        </div>
    )
}
export default Finalizar