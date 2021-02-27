//Reaproveita uma estrutura prévia entre todas as páginas da aplicação, mas é recalculado
//Tudo o que se repete na aplicação, tudo o que é fixo
import "../styles/global.css"

const  MyApp = ({ Component, pageProps }) => <Component {...pageProps} /> 
//Todos os elementos dentro do provider terão acesso aos dados dentro do context
//No caso, toda a aplicação
   
  

export default MyApp
