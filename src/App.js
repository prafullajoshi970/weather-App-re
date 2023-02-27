import React from 'react'
import {useState,useEffect} from 'react'
function App() {
  const [table,setTable]=useState([])
  const[tableData,setTableData]=useState([])
  
  const[cityName,setCityName]=useState("New York")
  const ApiFetch = () => {
  fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${cityName}`)
      .then(resp => resp.json())
      .then(data => (setTableData(data)))
      .catch(error => console.error(error));
 
}
const addItem=()=>{
  setTable([...table,tableData])}


const addcity=(e)=>{
    setCityName( e.target.value);
    e.preventDefault();
    ApiFetch (cityName)
    addItem();
  }
  const DeleteItem=(index)=>{
    const list=[...table]
    list.splice(index,1);
    setTable(list);
  }


useEffect(() => {
  ApiFetch();
})
console.log(table)
console.log(tableData)


 
  return (<>
  <h3>Prafulla Joshi's Wheather App</h3>
  <div className='App'>
   
   <div className='leftButtons'>
   <button className="topleft">City</button>
   <button className='btn1' value={"London"} onClick={ addcity}>London</button>
   <button className='btn1' value={"New York"} onClick={ addcity}>New York</button>
   <button className='btn1' value={"Los Angeles"} onClick={ addcity}>Los Angeles</button>
   <button className='btn1' value={"Las Vegas"} onClick={ addcity}>Las Vegas</button>
   </div>
  <div className='verticalBar'></div>
   <div className='righttableInfo'>
     <form type={'submit'}>
     <input type={'text'} onChange={(e)=>setCityName(e.target.value)}></input>
     <button className='search' onClick={addcity}>search</button>
     </form>
    
     <tbody>
   <tr><th>Date&Time</th>
   <th>Description</th>
   <th>Pressure</th>
   <th>Data age</th>
   <th>Data age</th></tr>
   
  
     {table.map((e,idx) =>
     <tr key={idx}> 
     <td>{e.date_and_time}</td>
     <td>{e.description}</td>
     <td>{e.humidity_in_percent}</td>
     <td>{e.pressure_in_hPa}</td>
     <td>{e.temp_in_celsius}</td>
    {table.length-1===idx && <button onClick={DeleteItem}>Delete</button>}
    </tr>
   
   
 
    )}
  
   
  
    
  
   </tbody></div></div></>
    
  )
}

export default App
