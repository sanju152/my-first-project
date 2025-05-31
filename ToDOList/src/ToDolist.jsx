import React,{useState} from "react";
function ToDOlist(){
    const [tasks,setTasks]=useState(["waakup early morning",
                                     "go to the walk"
    ])
    const [newtask,setNewtask]=useState("")

    function HandeltoChange(event){
        setNewtask(event.target.value)
        

    }
     function AddTask(){
        if(newtask.length>0){
            setTasks(t=>[...t,newtask])
            setNewtask("")
        }
        
    }
    function RemoveTask(index){
         const Updated=tasks.filter((_,i)=> i !== index)
         setTasks(Updated)
        
    }
    function UpTask(index){
       if(index > 0){
         const updated=[...tasks];
        [updated[index],updated[index-1]]=[updated[index-1],updated[index]]
        setTasks(updated)
        
       }
    }
    function DownTask(index){
         if(index < tasks.length-1){
         const updated=[...tasks];
        [updated[index],updated[index+1]]=[updated[index+1],updated[index]]
        setTasks(updated)
        
       }
    
    }
return(
     <div>
        <h1 className="heading">TO-DO-LIST</h1>
        <input type="text" value={newtask} placeholder="Enter the list..." onChange={HandeltoChange}/>
        <button className="list-btn" onClick={AddTask}>Add In List</button>
        <div>
            <ol>
                {tasks.map((task,index)=> <li key={index}>
                    <span className="text">{task}</span>
                    <button className="Delete-btn" onClick={()=>RemoveTask(index)}>Delete</button>
                    <button className="Delete-btn" onClick={()=>UpTask(index)}> ⬆️</button>
                    <button className="Delete-btn" onClick={()=>DownTask(index)}>⬇️</button>
                </li>)}
           
            </ol>
        </div>



    </div>
);
}
export default ToDOlist;
