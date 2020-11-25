import React, {useState} from 'react'
import '../styles/pages/FormPage.css'

import api from '../config/api'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function FormPage () {
    const [noticia, setNoticia] = useState({})

    function setTitle(e) {
        setNoticia(
            {
                ...noticia, title: e.target.value
            }
        )
    }

    function setCategory(e) {
        setNoticia(
            {
                ...noticia, category: e.target.value
            }
        )
    }

    function setContent(e) {
        setNoticia(
            {
                ...noticia, content: e.target.value
            }
        )
    }

    function clearForm () {
        setNoticia({
            title: '',
            category: '',
            content: ''
        })
    }

    function saveNew() {
        api.post('http://localhost:6969/saveNew', noticia)
            .then(() => {
                toast.success('Notícia cadastrada!')
                clearForm()
            })
            .catch((err) => {
                toast.error(err)
            })
    }

    return (
        <div className="form-page">
            <div className="title">
                <span>Cadastro de Notícias</span>
                <hr/>
            </div>

            <div className="form">
                <div className="form-group">
                    <span>Título:</span>
                    <input type="text" value={noticia.title || ''} onChange={e => setTitle(e)}/>
                </div>

                <div className="form-group">
                    <span>Categoria:</span>
                    <input type="text" onChange={e => setCategory(e)} value={noticia.category || ''}/>
                </div>

                <div className="form-group">
                    <span>Conteúdo:</span>
                    <textarea name="content-input" id="content-input" cols="20" rows="10"
                        onChange={e => setContent(e)} value={noticia.content || ''}></textarea>
                </div>

                <div className="form-buttons">
                    <div className="save-button" onClick={e => saveNew()}>Salvar</div>
                    <div className="clear-button" onClick={e => clearForm()}>Cancelar</div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}