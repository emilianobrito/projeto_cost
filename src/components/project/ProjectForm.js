import { useState, useEffect } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [project, setProject] = useState(projectData || {})
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data) //coloca todos os dados no state categories
      })
  }, [])

  const submit = (e) => {
    e.preventDefault()
    //console.log(project)
    handleSubmit(project) 
    //chama o handlesubmit do arquivo Newproject e envia o state project por props
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
    //1° imput{ campo_nome: projeto 01 }
    //2° imput{ campo_orçamento: R$50000 }
  }


  function handleCategory(e) {
    console.log(e.target.options[e.target.selectedIndex].text)
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
    // console.log(e.target.value)
  }

  return (
    <form onSubmit={submit} className={styles.form}> {/*execulta a função submit linha 25 */}
      <Input
        type="text"
        text="Nome do projeto"
        name="campo_nome"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.campo_nome}
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="custo_total_p"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.custo_total_p}
      />
      <Select
        text="Selecione a categoria"
        id="id_do_campo"
        name="campo_de_selecao"
        handleOnChange={handleCategory}
        categories={categories}//state categories
        value={project.category ? project.category.id : ''}
        //category vem do arquivo db.json e está dentro do state project(no 1° elemento do arrey). Não é o states categories.
      />
      <SubmitButton text={btnText} /> {/*execulta o onsubmit linha 51 */}
    </form>
  )
}

export default ProjectForm
