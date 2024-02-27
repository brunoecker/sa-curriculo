import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../styles/competencia/competencia.css'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../context/UserContext";


const Competencia = () => {
    const { userInfo, setUserInfo } = useUser();
    const [inp, setInp] = useState('');
    const [erro, setErro] = useState(true);

    const navigate = useNavigate()

    const [listaHabilidades, setListaHabilidades] = useState([]);

    const handleAddHabilidade = () => {
        if (inp.trim() !== '') {
            const novaLista = [...listaHabilidades, inp.trim()];
            setListaHabilidades(novaLista);
            setInp('');
            setErro(true);

            // Armazena a nova lista no localStorage
            localStorage.setItem('listaHabilidades', JSON.stringify(novaLista)); setListaHabilidades([...listaHabilidades, inp.trim()]);
            setInp('');
            setErro(true);
        } else {
            setErro('Esse campo é obrigatório!');
        }
    }

    const handleRemoveHabilidade = (index) => {
        const novaLista = [...listaHabilidades];
        novaLista.splice(index, 1);
        setListaHabilidades(novaLista);

        // Atualiza a lista no localStorage após remover uma habilidade
        localStorage.setItem('listaHabilidades', JSON.stringify(novaLista));
    }

    const hundleSubmit = (event) => {
        event.preventDefault()

        if (listaHabilidades == '') {
            setErro('Esse campo é obrigatório!')
        }else{
            navigate('/Resumo')
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
                            <button className="p-header1">Habilidades e Competências</button>
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
            <div className="center-container-ex">
                <div className="sub-container-ex">
                    <div className="div-subctn-ex">

                        <form onSubmit={hundleSubmit}>
                            <div className="row-title-hm">
                                <h1 className="p-title-hm">Acrescentes suas habilidades e competências, {userInfo.nome}</h1>
                            </div>
                            <div className="ctn1-hm">

                                <div className="column-rigth1-hm">
                                    <div className="row-subtitle-hm">
                                        <p className="p-subtitle-hm">Escolha palavras-chave para mostrar suas habilidades e competências.</p>
                                    </div>

                                </div>
                            </div>

                            <div className="row-inp-comp">
                                <input type="text" onChange={(e) => setInp(e.target.value)} className="inp-comp" placeholder="p. e. ReactJs" />
                                <span style={{ display: 'grid' }} className='span'>{inp ? '' : erro}</span>
                                <div style={{textAlign:'center', marginTop:'10px', marginBottom:'2rem'}}>
                                    <button type="button" onClick={handleAddHabilidade} className="btn-enviar-glob">Adicionar</button>
                                </div>
                                
                                
                            <div>
                                <ul>
                                    {listaHabilidades.map((habilidade, index) => (
                                        <li key={index} style={{fontFamily:'Georgia', marginTop:'10px'}}>
                                            {habilidade}
                                            <button type="button" onClick={() => handleRemoveHabilidade(index)} className="btn-ppp"  >Remover</button>
                                        </li>
                                    ))}
                                </ul>
                            </div> 
                            </div>
                            

                            <div className="row-btn-hm">
                                <button className="btn-enviar-glob" onClick={hundleSubmit}>Continuar</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Competencia