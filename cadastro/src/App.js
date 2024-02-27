import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Home from './components/home/Home'
import Exp from './components/experiencia/Exp'
import Formacao from './components/formacao/Formacao'
import Competencia from './components/competencia/Competencia'
import Resumo from './components/resumo/Resumo'
import Finalizar from './components/finalizar/Finalizar'
import  UserProvider  from './components/context/UserContext'


const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route element={<Login />} path={"/"} />
          <Route element={<Login />} path={"/Login"} exact />
          <Route element={<Home />} path={"/Home"} />
          <Route element={<Exp />} path='/Exp' />
          <Route element={<Register />} path={"/Register"} />
          <Route element={<Formacao />} path={"/Formacao"} />
          <Route element={<Competencia />} path={"/Competencia"} />
          <Route element={<Resumo />} path={"/Resumo"} />
          <Route element={<Finalizar />} path={"/Finalizar"} />

        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App