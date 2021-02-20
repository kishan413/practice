import React, { useState } from "react";
const Todo = () =>{
    const[name,setName] = useState()
    const[list,setlist] = useState([])
    const inputEvent = (event) =>{
        setName(event.target.value)

    }
    const click = () =>{
       setlist((prevData)=>{
           return [...prevData,name]
       })
       setName('')
    }
    const deleteItem =(index)=>{
        setlist((prevData)=>{
            return prevData.filter((data,id)=>{
                return id!==index
            })
        })
    }
    return(
        <>
        <div className='main_div'>
            <div className='center_div'>
                <h1>Todo List</h1>
                <input type='text' placeHolder='Add items' onChange={inputEvent} value={name}/>
                <button onClick={click} className='add'>+</button>
                <ol>
                    
                    {list.map((data,index)=>{
                        return<> <div className='todo_style'><button className='delete' onClick={()=>{
                            deleteItem(index)
                        }}>x</button><li>{data}</li></div></>
                    })}
                    
                    
                </ol>
            </div>
            
        </div>
        </>
    )
}
export default Todo;