import React,{useState} from 'react'

export const App = () => {
  const [input, setInput]=useState("")
  const [id,setId]= useState(0)
  const [data,setData]= useState([
    {id:1,text:"button1"},
    {id:2,text:"button2"},
    {id:3,text: "button3"},
    {id:4,text:"button4"}
  ])
  const handleInput=(txt,index)=>{
    setId(index)

    setInput(txt)
  }
  const handleBtn=()=>{
  //  console.log("text reset",txt)
  //  console.log("id is",id)
   let newData=[...data]
   console.log("newData is",newData)
   //const ind=newData.findIndex(p=>p.id===id)
   newData[id].text= input
   setData(newData)
   setInput("")

  }
  return (
    <div style={{textAlign:"center"}}>
      <h2>button text</h2>
      {
        data.map((btn,index)=>{
          return (<>
          <button>{btn.text}</button><br/><br/>
          <button onClick={()=>handleInput(btn.text,index)}>Click Me</button>
          <br/>
          <br/>
          <br/>
          </>);
          
        })
        
        
      }
      <input type="text" value={input} onChange={(e)=>{
        setInput(e.target.value)
      }
      }/>
      <button  onClick={()=>handleBtn()}>Save</button>
    </div>
  )
}
