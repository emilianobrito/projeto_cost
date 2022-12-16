import styles from '../project/ProjectCard.module.css'

import { BsFillTrashFill } from 'react-icons/bs'

function ServiceCard({ id, name, custo_total_s, description, handleRemove }) {
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id, custo_total_s) //executa a função armazenada no handleRemove={removeService()} passando como argumento (id, custo_total_s)
  }

  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Custo total:</span> R${custo_total_s}
      </p>
      <p>{description}</p>
      <div className={styles.project_card_actions}>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  )
}

export default ServiceCard
