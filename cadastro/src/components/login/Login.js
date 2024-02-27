import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import '../../styles/crud/crud.css'
import axios from 'axios'
import { UserContext, useUser } from "../context/UserContext";

const Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState(true)
    const [erroEmail, setErroEmail] = useState(true)
    const [erroSenha, setErroSenha] = useState(true)

    const { userInfo, setUserInfo } = useUser();

    const navigate = useNavigate()

    const hundleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.get('http://localhost:8800')

        if(email == '' || senha == ''){
            setErro('Esse campo é obrigatório!')
        }else{
            try {
                const res = await axios.get('http://localhost:8800');
                const usuariosCadastrados = res.data;
        
                const usuarioLogado = usuariosCadastrados.find((usuario) => usuario.email === email);
        
                if (usuarioLogado) {
                  if (senha === usuarioLogado.senha) {
                    const userLogado = usuarioLogado;
                    setUserInfo(userLogado)
                    
                    navigate('/Home')
                  } else {
                    setErroSenha('Senha incorreta!');
                  }
                } else {
                  // O email não está cadastrado
                  setErroEmail('Email não cadastrado!');
                }
              } catch (error) {
                console.error('Erro ao obter dados do usuário:', error);
              }
            }
        
    }

    return (
        <div className="container">

            <div className="container-center">
                <div className="sub-container">
                    <div className="row-title">
                        <h1>Acesse a sua conta</h1>
                    </div>
                    <div className="row-form">
                        <form onSubmit={hundleSubmit}>

                            <p className="p-form">E-mail</p>
                            <input onChange={(e) => setEmail(e.target.value)} type="text" className="input-crud" />
                            <div className="row-span">
                                <span className='span'>{email ? '' : erro}</span>
                                <span className='span'>{erroEmail && (
                                    <div style={{ color: 'red', marginTop: '5px' }}>
                                        {erroEmail}
                                    </div>
                                )}</span>
                            </div>

                            <p className="p-form">Senha</p>
                            <input onChange={(e) => setSenha(e.target.value)} type="password" className="input-crud" />
                            <div className="row-span">
                                <span className='span'>{senha ? '' : erro}</span>
                                <span className='span'>{erroSenha && (
                                    <div style={{ color: 'red', marginTop: '5px' }}>
                                        {erroSenha}
                                    </div>
                                )}</span>
                            </div>

                            <div className="row-btn-cd">

                                <button className="btn-cd" type="submit">Iniciar sessão</button>


                            </div>


                        </form>
                    </div>

                    <div className="row-border">
                        <div className="border"></div>
                    </div>
                    <div className="row-p-login">
                        <p className="p-login">Não tem uma conta? <Link to={'/Register'}><button className="btn-login">Cadastre-se</button></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login