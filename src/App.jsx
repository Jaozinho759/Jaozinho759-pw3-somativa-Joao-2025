import './App.css'

import BookCard from './components/BookCard'

import cavernas_aco from './assets/cavernas_aco.jpg'
import sol_desvelado from './assets/sol_desvelado.jpg'
import anel from './assets/anel.jpg'
import fim_da_infancia from './assets/end.jpg'



function App() {

  return (
    <>
      <div className="card">
       <h1>PW3 - WEBAPP - LIVRARIA</h1>
       <BookCard
        titulo='As Cavernas de Aço' 
        autor='Isaac Azimov'
        imagem={cavernas_aco}/>
        <BookCard
        titulo='Senhor Dos Anéis' 
        autor='J. R. R. Tolkien'
        imagem={anel}/>
         <BookCard
        titulo='O Fim da Infancia' 
        autor='Arthur C. Clark'
        imagem={fim_da_infancia}/>
         <BookCard
        titulo='O Sol Desvelado' 
        autor='Isaac Azimov'
        imagem={sol_desvelado}/>
      </div>
    </>
  )
}

export default App
