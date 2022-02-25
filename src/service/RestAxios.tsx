import React, { useEffect, useState } from 'react'
import axios from 'axios'



const getAxios = async (url: string) => {
    return axios.get(url)
        .then((res: any) => res.data)
        .catch((err: any) => console.log(err))
}

const postAxios = (url: string, data: any) => {
    return axios.post(url,data)
    .then((res: any) => res.data)
    .catch((err: any) => console.log(err));
}

const delAxios = (url: string,id?: any) => {
    axios.delete(url + '/' + id)
    .catch((err:any) => console.log(err));
}

const putAxios = (url: string,id?: any,data?: any) => {
    return axios.put(url + '/' + id,data)
    .then((res:any) => res.data)
    .catch((err:any) => console.log(err))
}


// function RestAxios() {
//     const url = "http://localhost:3030/info";
//     const [data,setData] = useState<any>([]);
//     const demo: any = {
//         userId : -1,
//         body: 'demoBody',
//         title: 'demo_Title'
//     }
//     useEffect(() => {
//         getAxios(url).then(dt => setData(dt));
//         console.log(data);
//     }, []);
//     const handleDelete = (e: any) => {
//         let Ndata = data.filter((dt: any) => dt.id !== e.target.value)
//         axios.delete(url + '/' + e.target.value);
//         setData([...Ndata])
//     }
//     const handleEdit = (e: any) => {
//         let Ndata = [...data];
//         axios.put(url + '/' + e.target.value,demo);
//         setData(Ndata);
//     }
//     const handlepost = () => {
//         setData([...data,demo])
//         axios.post(url,demo);
//     }
//   return (
//     <div>
//         <input type="text" placeholder='delete' onChange={handleDelete}/>
//         <input type="text" placeholder='edit' onChange={handleEdit}/>
//         <input type="button" value='post' onClick={handlepost}/>

//         {data.map((dt: any) => <p key = {dt.id} style = {{margin: 'auto'}}>{dt.id} and {dt.title}</p>)}
//     </div>
//   )
// }

export {getAxios, putAxios,postAxios,delAxios}

