import Button from './Form/Button'

import style from './BookCard.module.css'

const BookCard = ({nome_livro, autor_livro, img_livro})=>{
    return(
        
        <div className={style.bookCard}>
            <h3 className={style.titulo}>{nome_livro}</h3>
            <p className={style.autor}>{autor_livro}</p>
            <img src={img_livro} alt="Capa: As Cavernas de Aço" />
            <Button label='DETALHE' />
        </div>
        
    )
}

export default BookCard