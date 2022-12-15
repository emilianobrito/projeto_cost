import styles from './Select.module.css'

function Select({ text, name, id, categories, handleOnChange, value }) {
  // console.log(value)
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select
        name={name}
        id={id}//id_do_campo
        onChange={handleOnChange}
        value={value || ''}
      >
        <option>0 Selecione uma opção</option>{/* valor default */}
        {categories.map((option) => (
          <option 
            value={option.id}//id_das_5_opções
            key={option.id}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
