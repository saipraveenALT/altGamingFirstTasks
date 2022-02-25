import React, {useEffect, useState} from 'react';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { postApi ,getApi} from '../service/RestApiCalls';
import TableComp from './TableComp';
const Content = () => {
  useEffect(() => {
    getApi(url).then((data) => {setData(data)});
    toast.error("OH NO ERROR");
    toast.success("YOU SUCCEEDED");
  },[]);
  const url = "http://localhost:3030/info";
  const header = ["ID","userId","Title",'utils'];
  const [data,setData] = useState<any>([]);
  const [id,setId] = useState("");
  const [uid,setUid] = useState("");
  const [title,setTitle] = useState("");
  const handleSave = (e: any) =>{
    e.preventDefault();
    const dt = {
      userId: uid,
      title: title,
      body: 'any'
    };
    postApi(url,dt).then((val) => {setData([...data,val])})
  }
  return (
    <div>
        <ToastContainer/>
        <h1>Content</h1>
        <h1 style={{textAlign: 'center'}}>rest API</h1>
      <form>
        <input
            type = "text"
            placeholder="ID"
            onChange={(e) => setId(e.target.value)}
          />
          {    }
          <input
            type = "text"
            placeholder="userId"
            onChange={(e) => setUid(e.target.value)}
          />
          {   }
          <input
            type = "text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          {   }
          <input
            type = "submit"
            value = "Save"
            onClick={handleSave}
          />
      </form>
      {<TableComp handleSave = {handleSave} setData = {setData} header={header} data={data}/>} 
    </div>
  )
}

export default Content