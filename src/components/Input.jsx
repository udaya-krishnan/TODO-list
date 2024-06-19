import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"


 
 
 export  const InputContainer = ({ task, setTask, data, setData }) => {
    return (
     
        <div className="input-container">
          <div className="input">
            <input
              type="text"
              placeholder="Add new task..."
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />
            <button
              type="button"
              onClick={() => {
                  if (task.trim()) { 
                    const newTask = {
                      key: new Date().toISOString(),
                      value: task,
                      edit:"false",
                    };
                   
                    setTask("");
                     
                     
                      added(newTask,setData,setTask,data)
                    }else{
                      messFun()
                    }
              }}
            >
              Submit
            </button>
         
          </div>
          
        </div>
  
    );
  };
  


  
function messFun(){

    Toastify({
        text: "Enter new Task",
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
        // onClick: function(){} // Callback after click
      }).showToast();

}


function added(newTask,setData,setTask,data){

 const taskExists = data.some(task => newTask.value.toLowerCase() === task.value.toLowerCase());

  if(taskExists){

    Toastify({
      text: "This task Exists",
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
      // onClick: function(){} // Callback after click
    }).showToast();
  

  }else{

    setData(prevData => [...prevData,newTask]);
    
    Toastify({
      text: "Added new Task",
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
      // onClick: function(){} // Callback after click
    }).showToast();

    
  }


}