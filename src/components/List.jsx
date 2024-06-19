import { useState } from "react";


function onEdit(taskKey,setData){

        
    setData(prevData =>
        prevData.map(e => {
          if (e.key === taskKey) {
            return { ...e, edit: !e.edit };
          } else {
            return e;
          }
        })
      );

}

function onSave(taskKey, newValue, setData) {

    setData(prevData =>
      prevData.map(e => {
        if (e.key === taskKey) {
          return { ...e, value: newValue, edit: false };
        } else {
          return e;
        }
      })
    );

  }

  function finalSave(taskKey,newValue,setData){
    setData(prevData=>
        prevData.map(e=>{
            if(e.key===taskKey){
                return {...e,value:newValue,edit:"false"}
            }else{
                return e;
            }
        })
    )
  }


  const onTaskDone = (taskKey, setData) => {
    setData(prevData =>
      prevData.map(e => (e.key === taskKey ? { ...e, done: true } : e))
    );
  };


export const ListData = ({data,onDelete,setData}) => {

    return (
     
      <div className="data-container">
        {data.map((task,index)=>(
           <div className="list-data" key={index} >
       <input
            type="checkbox"
            className="check-box"
            name=""
            id=""
            onClick={() => onTaskDone(task.key, setData)}
            checked={task.done}
            readOnly
          />
         {task.edit==="false"?
         
    <>
       
         <p id="value">{task.value}</p>

           <div>
           {!task.done && (
                  <button
                    className="btn-edit-icon"
                    key={"edit"}
                    onClick={() => onEdit(task.key, setData)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#225948"
                        d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                      />
                    </svg>
                    <div className="tooltip">Edit</div>
                  </button>
                )}


             <button className="btn-icon" key={"delete"} onClick={()=>onDelete(task.key)}>
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className="icon"
                 viewBox="0 0 448 512"
               >
                 <path
                   fill="#436b58"
                   d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
                 />
               </svg>
               <div className="tooltip">Delete</div>
             </button>
           </div>
         
        </>
         :
         
         <>
              <input
                type="text"
                className="edit-input"
                value={task.value}
                onChange={(e) =>
                  onSave(task.key, e.target.value, setData)
                }
              />
              <button  className="btn-save-icon" onClick={() => finalSave(task.key, task.value, setData)}>
              <svg xmlns="http://www.w3.org/2000/svg"  className="icon-save" viewBox="0 0 448 512"><path fill="#225948" d="M48 96V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V170.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9c12 12 18.7 28.3 18.7 45.3V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H309.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5-33.9 33.9L320.8 84.7c-.3-.3-.5-.5-.8-.8V184c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24V80H64c-8.8 0-16 7.2-16 16zm80-16v80H272V80H128zm32 240a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"/></svg>
              <div className="tooltip">Save</div>
              </button>
         </>
         
         }
            
         </div>
     
        ))}
         
      </div>
      
    );
  };
  