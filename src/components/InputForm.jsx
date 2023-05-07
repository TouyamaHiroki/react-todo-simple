import React, { useState } from 'react'

const InputForm = ({taskList, setTaskList}) => {

  const [inputText, setInputText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    // タスクを追加する
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText
      }
    ]);

    setInputText("")
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div className='inputForm'>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText}/>
        <button>+</button>
      </form>
    </div>
  )
}

export default InputForm
