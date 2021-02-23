//Reaproveita uma estrutura prévia entre todas as páginas da aplicação, mas é recalculado
//Tudo o que se repete na aplicação, tudo o que é fixo
import "../styles/global.css"
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
