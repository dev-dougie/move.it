//Reaproveita uma estrutura prévia entre todas as páginas da aplicação, mas é recalculado
//Tudo o que se repete na aplicação, tudo o que é fixo
import "../styles/global.css"

import {useState} from 'react'
import {ChallengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {


  return (
    //Todos os elementos dentro do provider terão acesso aos dados dentro do context
    //No caso, toda a aplicação
    <ChallengesProvider>
       <Component {...pageProps} />
    </ChallengesProvider>
    
  )
}

export default MyApp
