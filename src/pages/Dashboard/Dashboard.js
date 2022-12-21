import { useEffect } from 'react'
import { useState } from 'react'
import './dashboard.css'
import axios from 'axios'

function Dashboard() {

  const [data, setdata] = useState([])
  
  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/getresults").then(res => {
      setdata(res.data.votes)
      
    }).catch(error => {
      console.log(error)
    })
    
    
  },[])

  return (
    <div className='page'>
      <h4 className='head-text'>Dashboard</h4>
      <table border={1}>
        <thead>
          <tr>
            <th>
            Party Name
            </th>
            <th>
              Votes
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => {
            return (
              <tr key={item.id} className='row'>
                <td>{item.partyName}</td>
                <td>{ item.votes}</td>
              </tr>
           )
         })}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard