import ReactDOM from "react-dom/client"
import Title from "./components/Title"
import ParentComponent from "./components/Center"



// import {ListData} from "./components/Center"




const Container=()=>{
    return (
        <>
        <Title/>
        <ParentComponent/>
        
        
        </>
    )
}



let root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<Container/>)