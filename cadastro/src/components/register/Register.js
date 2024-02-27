import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate  } from "react-router-dom";
import '../../styles/crud/crud.css'
import axios from 'axios'

const Register = () => {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmsenha, setConfirmsenha] = useState('')
    const [erro, setErro] = useState(true)
    const [erroSenha, seterroSenha] = useState(true)
    const [erroEmail, seterroEmail] = useState(true)

    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.get(`http://localhost:8800`)

        const data = res.data || [];
        const emailExistente = data.map(item => item.email);

        if (nome == false || sobrenome == false || email == false || senha == false) {
            setErro('Esse campo é obrigatório!')
        } else if (senha != confirmsenha) {
            seterroSenha('As senhas não coincidem!')
        } else if (emailExistente.includes(email)) {
            // Verifica se o email já existe na array de emails existentes
            seterroEmail('Email já cadastrado!')
        }
        else {
            await axios.post("http://localhost:8800", {
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                senha: senha
            })
                .then(({ data }) => data)
                .catch(({ error }) => error)

                navigate("/Login");
        }
    }

    return (
        <div className="container">

            <div className="container-center">
                <div className="sub-container">
                    <div className="row-title">
                        <h1>Cadastro</h1>

                    </div>
                    <div className="row-form">
                        <form onSubmit={handleSubmit}>

                            <p className="p-form">Nome</p>
                            <input onChange={(e) => { setNome(e.target.value) }} type="text" className="input-crud" />
                            <div className="row-span">
                                <span className='span'>{nome ? '' : erro}</span>

                            </div>

                            <p className="p-form">Sobrenome</p>
                            <input onChange={(e) => { setSobrenome(e.target.value) }} type="text" className="input-crud" />
                            <div className="row-span">
                                <span className='span'>{sobrenome ? '' : erro}</span>
                            </div>

                            <p className="p-form">E-mail</p>
                            <input onChange={(e) => { setEmail(e.target.value) }} type="text" className="input-crud" />
                            <div className="row-span">
                                <span className='span'>{email ? '' : erro}</span>
                                <span className='span'>{erroEmail && (
                                    <div style={{ color: 'red', marginTop: '5px' }}>
                                        {erroEmail}
                                    </div>
                                )}</span>
                            </div>


                            <p className="p-form">Senha</p>
                            <input onChange={(e) => { setSenha(e.target.value) }} type="password" className="input-crud" />
                            <div className="row-span">
                                <span className='span'>{senha ? '' : erro}</span>
                            </div>

                            <p className="p-form">Confirme sua senha</p>
                            <input onChange={(e) => { setConfirmsenha(e.target.value) }} type="password" className="input-crud" />
                            <div className="row-span">
                                {setErro ? (
                                    <span className='span'>
                                        {confirmsenha === '' ? erro : 'As senhas não coincidem.'}
                                    </span>
                                ) : null}
                            </div>
                            
                            <div className="row-btn-cd">
                                <button className="btn-cd" type="submit">Cadastrar</button>
                            </div>


                        </form>
                    </div>

                    <div className="row-border">
                        <div className="border"></div>
                    </div>
                    <div className="row-p-login">
                        <p className="p-login">Já tem uma conta? <Link to={'/Login'}><button className="btn-login">Login</button></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register