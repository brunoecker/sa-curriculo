import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../styles/formacao/formacao.css'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../context/UserContext";


const Exp = () => {
    const { userInfo, setUserInfo } = useUser();
    const [inst, setInst] = useState('');
    const [cidade, setCidade] = useState('');
    const [quali, setQuali] = useState('');
    const [area, setArea] = useState('');
    const [erro, setErro] = useState(true);
    const [selectedMonthI, setSelectedMonthI] = useState('');
    const [selectedMonthF, setSelectedMonthF] = useState('');
    const [selectedYearI, setSelectedYearI] = useState('');
    const [selectedYearF, setSelectedYearF] = useState('');

    const months = ['Mês', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const yearsI = ['Ano', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010'];
    const yearsF = ['Ano', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035'];

    const navigate = useNavigate()

    const hundleSubmit = (event) => {
        event.preventDefault()
        if (inst === '' || cidade === '' || quali === '' || area === '') {
            setErro('esse campo é obrigatório!')
        } else {

            localStorage.setItem('inst', inst);
            localStorage.setItem('Cidade', cidade);
            localStorage.setItem('Quali', quali);
            localStorage.setItem('Area', area);
            localStorage.setItem('MesIForm', selectedMonthI);
            localStorage.setItem('MesFform', selectedMonthF);
            localStorage.setItem('AnoIform', selectedYearI);
            localStorage.setItem('AnoFform', selectedYearF);

            setInst(localStorage.getItem('inst'));
            setCidade(localStorage.getItem('Cidade'));
            setQuali(localStorage.getItem('Quali'));
            setArea(localStorage.getItem('Area'));
            setSelectedMonthI(localStorage.getItem('MesIForm'));
            setSelectedMonthF(localStorage.getItem('MesFform'));
            setSelectedYearI(localStorage.getItem('AnoIform'));
            setSelectedYearF(localStorage.getItem('AnoFform'));

            navigate('/Competencia')

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
                            <button className="p-header1">Formação Acadêmica</button>
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
                        <div className="row-title-hm">
                            <h1 className="p-title-hm">Acrescente sua formação <p className="resumo-color">acadêmica, {userInfo.nome}</p></h1>
                        </div>
                        <div className="ctn1-hm">

                            <div className="column-rigth1-hm">
                                <div className="row-subtitle-hm">
                                    <p className="p-subtitle-hm">Liste todas as qualificações ou diplomas que você obteve, ou que estejam em andamento.</p>
                                </div>

                            </div>
                        </div>
                        <div className="ctn-bottom-ex">
                            <div className="column1-exp">
                                <div className="row-inp-exp">
                                    <p className="p-exp">Instituição</p>
                                    <input type="text" onChange={(e) => setInst(e.target.value)} placeholder="p. ex. Universidade Federal xxxxx" className="inp-exp" />
                                    <span style={{ display: 'grid' }} className='span'>{inst ? '' : erro}</span>
                                </div>
                                <div className="row-inp-exp">
                                    <p className="p-exp">Qualificação ou grau</p>
                                    <input type="text" onChange={(e) => setQuali(e.target.value)} className="inp-exp" placeholder="p. ex. Bacharel"/>
                                    <span style={{ display: 'grid' }} className='span'>{quali ? '' : erro}</span>
                                </div> 
                                <div className="row-dt-ex">
                                    <p className="p-exp">Data de inicio</p>
                                    <select className="select1-ex" value={selectedMonthI} onChange={(e) => setSelectedMonthI(e.target.value)}>
                                            {months.map((month, index) => (
                                                <option key={index} value={index}>{month}</option>
                                            ))}
                                        </select>
                                        <select className="select2-ex" value={selectedYearI} onChange={(e) => setSelectedYearI(e.target.value)}>
                                            {yearsI.map((year, index) => (
                                                <option key={index} value={year}>{year}</option>
                                            ))}
                                        </select>
                                </div>
                            </div>

                            <div className="column2-exp">
                                <div className="row-inp-exp">
                                    <p className="p-exp">Cidade</p>
                                    <input type="text" onChange={(e) => setCidade(e.target.value)} className="inp-exp" placeholder="p. ex. São Paulo"/>
                                    <span style={{ display: 'grid' }} className='span'>{cidade ? '' : erro}</span>
                                </div>
                                <div className="row-inp-exp">
                                    <p className="p-exp">Área de estudo</p>
                                    <input type="text" onChange={(e) => setArea(e.target.value)} className="inp-exp" placeholder="p. ex. Ti"/>
                                    <span style={{ display: 'grid' }} className='span'>{area ? '' : erro}</span>
                                </div>
                                <div className="row-dt-ex">
                                    <p className="p-exp">Data de Conclusão</p>
                                    <select className="select1-ex" value={selectedMonthF} onChange={(e) => setSelectedMonthF(e.target.value)}>
                                            {months.map((month, index) => (
                                                <option key={index} value={index}>{month}</option>
                                            ))}
                                        </select>
                                        <select className="select2-ex" value={selectedYearF} onChange={(e) => setSelectedYearF(e.target.value)}>
                                            {yearsF.map((year, index) => (
                                                <option key={index} value={year}>{year}</option>
                                            ))}
                                        </select>
                                </div>
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
export default Exp