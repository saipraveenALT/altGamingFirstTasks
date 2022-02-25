// for getting the api
const getApi = (url: string) => {
    return (fetch(url,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      } 
    })
    .then(res => {
      return res.json();
    })
    .catch( err => console.log(err)));
}

//for uploding the data 
const postApi = (url: string, data: any) => {  
  return fetch(url,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(err => console.log(err));
}


//for deleting
const delApi = (url: any,id : any) => {
  fetch(url + '/' + id,{
    method: "DELETE"
  })
}

//for updating a value
const putApi = (url: string , id: any) => {
  return fetch("http://localhost:3030/info/" + id,{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({title: "Edited",userId: "new Id",body: "new user body"})
    })
    .then(res => res.json())
    .catch(err => console.log(err));
}
function RestApiCalls() {
  return (<></>);
}
// export {getBalance};
export { getApi ,postApi ,delApi , putApi}
























// const getBalance = (userId: string) => {
//   return fetch(`https://user-api.jerambro.com/api/v1/user/balance-summary`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": "-"
//       }
//     }).then((res)=>{
//       return res; 
//     }).catch((err)=>{
//       console.error(err);
//     });
// }