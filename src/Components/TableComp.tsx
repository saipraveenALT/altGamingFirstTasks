import "./TableComp.css"
import {delApi, putApi }from '../service/RestApiCalls'
import { toast } from "react-toastify";

function TableComp(props: any) {
    const url = "http://localhost:3030/info";
    const handleDel = (id: any) =>{
        const newData = props.data.filter((dt: any) => dt.id !== id);
        props.setData(newData);
        delApi(url,id);
        toast.success("deleted");
    }
    
    const handleEdit = (id: any,i: any) => {
        var newData = [...props.data];
        putApi(url,id)
        .then(dt =>{
            newData[i] = dt;
            props.setData(newData);
        })
    }
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>API Data</h1>
        <table>
            <thead>
                <tr>
                    {
                        props.header.map((head:any ,i: number) => <th key={i + 1}>{head}</th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((dt: any,i: any) => (
                        <tr key={dt.id}>
                            <td>{dt.id}</td>
                            <td>{dt.userId}</td>
                            <td>{dt.title}</td>
                            <td>
                                <button onClick={() => handleEdit(dt.id,i)}>Edit</button>
                                <button onClick={() => handleDel(dt.id)}>Del</button>
                            </td>
                        </tr>
                        )
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default TableComp