import React, { useEffect } from 'react'
import { useState } from 'react'
import { render } from 'react-dom'
import { AiFillDelete } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'
import { TiThLarge } from 'react-icons/ti'



function App() {



  const [title, settitle] = useState("")




  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title }])

    console.log(mainTask)
    settitle("")
  }



  const [mainTask, setMainTask] = useState([])

  useEffect(() => {
    // Load tasks from local storage when component mounts
    const savedTasks = JSON.parse(localStorage.getItem('mainTask'));
    if (savedTasks) {
      setMainTask(savedTasks);
    }
  }, []);

  useEffect(() => {
    // Save tasks to local storage whenever tasks state changes
    localStorage.setItem('mainTask', JSON.stringify(mainTask));
  }, [mainTask]);





  let renderTask = <h1 className='text-center'>NO TASK HERE</h1>

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)

  }

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return <li key={i} className='flex bg-white mb-2 px-2 rounded justify-between items-center'>
        <h1 className='text-xl font-semibold p-1'>{t.title}</h1>
        <button onClick={() => deleteHandler(i)}> <MdDeleteOutline size={20} /></button>
      </li>

    })



  }


  return (
    <>
      <div className='min-h-[500px] w-[400px] bg-slate-400 m-auto rounded mt-10'>
        <h1 className='font-bold text-center text-2xl p-2 mb-2'>To-Do-List</h1>

        <form onSubmit={submitHandler} className='flex justify-center '>
          <input className='px-8 py-2 rounded-l-lg outline-none' type="text" placeholder='Enter your Task'
            value={title}
            onChange={(e) => {
              settitle(e.target.value)
            }}
          />

          <button className='bg-green-500 py-2 px-3 rounded-r-lg'>Add</button>
        </form>

        <div className='flex justify-center mt-6'>
          <ul className='w-[300px] rounded-lg p-2'>
            {renderTask}
          </ul>
        </div>


      </div>


    </>
  )


}


export default App
