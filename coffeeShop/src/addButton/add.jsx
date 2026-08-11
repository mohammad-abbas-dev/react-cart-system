import { createContext,useState } from 'react'
import style from './add.module.css'
import EditWindow from '../itemEditWindow/itemEditWindow.jsx'

export const editWindowContext = createContext()

function Add(){
  let [editWindow,setEditWindow]=useState(false)
  function openWindow(){
    setEditWindow(true)
  }
return(
  <>
  <div onClick={openWindow} className={style.add}>
    <div className={style.container}>
        <button>+</button>
    </div>
  </div>
  <editWindowContext.Provider value={editWindow}>
  <EditWindow style={{display:"none"}} closeWindow={()=>setEditWindow(false)}/>
  </editWindowContext.Provider>
  </>
  
)
}

export default Add