import { useState ,useEffect } from "react";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { ListData } from "./List";
import { InputContainer } from "./Input";
import { json } from "react-router-dom";



const  ParentComponent=()=>{
    const localData=JSON.parse(localStorage.getItem('data'))||[]

    const [task, setTask] = useState("");
    const [data, setData] = useState(localData);

  useEffect(()=>{
    localStorage.setItem("data",JSON.stringify(data))
  },[data])

    const onDelete=(key)=>{

        Toastify({
            text: "Delete Task",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){
               return 
            } 
          }).showToast()

          setData(prevData=>prevData.filter(task=>task.key!==key))

          

       
    }
    console.log("Startingggg")

    return (
        <>
          <InputContainer task={task} setTask={setTask} data={data} setData={setData} />
          <ListData data={data} onDelete={onDelete} setData={setData} />
        </>
    )

}



export default ParentComponent
