import { useState } from 'react';
import './Home.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from 'react-router-dom';


function Home() {

  const [parties, setparties] = useState([])
  const [markdid, setmarkedid] = useState(0)
  // const navigation=useNavigation()

  const voteNow = (e) => {
    if (markdid === 0) {
      alert('please select one')
      return 
    }
    
    axios.post('http://localhost:5000/api/v1/parties', { id: markdid }).then(res => {
      
      if (res.data.status) {
        
        console.log(res.data.status)
      } else {
        alert('vote did not saved')
      }
    }).catch(error => {
      alert('vote did not count please try again')
    })
  }

  useEffect(() => {

    axios.get('http://localhost:5000/api/v1/parties').then(res => {
      setparties(res.data.parties)
    }).catch(error => {
      alert(error.message)
    })

    
  },[])
  
  return (
    <>
      <div className="page">
        <h4 className='head-text'>ELECTION NAME-YEAR</h4>
        <table border={2}>
          <tbody>
            {
              parties.map(party => {
                return (
                  <tr className='row' key={party.id}>
                    <td className='one-item'>
                      <img src={ party.img} alt="logo" width={100} height={100} />
                      <h3>{ party.partyName}</h3>
                    </td>
                    <td>{ party.name}</td>
                    <td>
                      <button className='mark' onClick={() => {
                        setmarkedid(party.id)
                      }} >
                        {markdid===party.id&& 'X'}
                      </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div className="btns">
          <button className="btn fn btns bn2 " onClick={()=>setmarkedid(0)}>Clear</button>
          <button className="btn fn btns bn1" onClick={voteNow}>Vote</button>
        </div>
      </div>
    </>
  )
}

export default Home