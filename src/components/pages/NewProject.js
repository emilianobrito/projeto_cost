import { useHistory } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'

function NewProject() {
  const history = useHistory()

  // initialize cost and services
  function createPost(project) {
    //execulta a função createPost recebendo o state project por props vinda do arquivo projectForm
    project.total_utilizado_p = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        history.push('/projects', { message: 'Projeto criado com sucesso!' }) // envia  o usuário para esse endereço
      })
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
      {/*chama a função createPost linha 10 */}
    </div>
  )
}

export default NewProject
