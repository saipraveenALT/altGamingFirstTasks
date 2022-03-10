import React, {useEffect, useState} from 'react';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { postApi ,getApi} from '../service/RestApiCalls';
import TableComp from './TableComp';


const Content = () => {
  //for getting the initial data from an api
  useEffect(() => {
    getApi(url).then((data) => {setData(data)});
    // toast.error("OH NO ERROR");
    // toast.success("YOU SUCCEEDED");
  },[]);


  const url = "http://localhost:3030/info";
  const header = ["ID","userId","Title",'utils'];
  const [data,setData] = useState<any>([]);
  const [uid,setUid] = useState("");
  const [title,setTitle] = useState("");

  //saving the details in db or json
  const handleSave = (e: any) =>{
    e.preventDefault();
    //if it is empty data 
    if(uid == "" || title == ""){
      toast.error("check your response");
      return;
    }
    //for duplicate values
    const existUser =  data.filter((per: any) => per.userId == uid);
    if(existUser?.length == 1){
      toast.error("userId already taken");
      return;
    }

    //inserting 
    const dt = {
      userId: uid,
      title: title,
      body: 'any'
    };

    //adding valid data
    postApi(url,dt).then((val) => {setData([...data,val])})
    toast.success("added");
  }
  return (
    <div>
        <ToastContainer/>
        <h1>Content</h1>
        
        <h1 style={{textAlign: 'center'}}>rest API</h1>

      <form  noValidate autoComplete='off'>
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