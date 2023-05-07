import React from 'react'

const TodoList = ({taskList, setTaskList}) => {

  const handleDelete = (id) => {
    // タスクを削除する
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  const handleCompleted = (id) => {
    setTaskList(taskList.map((task) => {
      if(id === task.id) {
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    }))
  };

  return (
    <div className='todoList'>
      <div className="todos">
        {taskList.map((task, index) => (
        <div className={`todo ${task.completed ? "completed" : ""}`} key={index}>
          <div className="todoText">
            <span>{task.text}</span>
          </div>
          <div className="icons">
            <button className='check' onClick={() => handleCompleted(task.id)}>✔︎</button>
            <button className='trash' onClick={() => handleDelete(task.id)}>✖︎</button>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
