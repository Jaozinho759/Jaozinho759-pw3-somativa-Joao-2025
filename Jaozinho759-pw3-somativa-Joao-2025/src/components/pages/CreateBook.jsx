import React from "react";

import { useState } from "react";

import style from './CreateBook.module.css'

import Input from "../Form/Input";
import Select from "../Form/Select";
import Button from "../Form/Button";


const CreateBook = () => {


    /* CRIA A ESTRUTUTA DE STATE PARA OS DADOS DE LIVROS */

    const [book, setBook] = useState({});

    //Captura de dados dos elementos dos iút

    function handleChangebook(event){
      setBook({...book, [event.target.name] : event.target.value});
      console.log(book);

    }
    //Captura os dados do select

    function handleChangeCategory(event) {
      setBook({...book, category : event.target.options[event.target.selectedIndex].text})

    }

    //Envio para a API
    function submit(event) {
      event.preventDefault();
      console.log(book);

    }

    return (
      <section className={style.create_book_container}>
        <h1>CADASTRO DE LIVROS</h1>

        <form onSubmit={submit} > 
  
        <Input
          type="text"
          name="txt_livro"
          id="txt_livro"
          placeholder="Digite o nome do livro"
          handlerChange={handleChangebook}
        />
  
        <Input
          type="text"
          name="txt_autor"
          id="txt_autor"
          placeholder="Digite o nome do autor"
          handlerChange={handleChangebook}
        />
  
        <Input
          type="text"
          name="txt_descricao"
          id="txt_descricao"
          placeholder="Digite a descrição do livro"
          handlerChange={handleChangebook}

        />

        </form>
  
        <Select
          name="slc_categoria"
          id="slc_categoria"
          text="Categoria do Livro"
          HandleChange={handleChangeCategory}
        />
  
        <Button
         label="Cadastrar Livro" 
         />
  
      </section>
    );
  };
  
  export default CreateBook;
