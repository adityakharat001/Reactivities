
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';


interface Activity {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  city: string;
  venue: string;
}

function App() {
 const [activities,setActivities] = useState<Activity[]>([]);

 useEffect(()=>{
  axios.get<Activity[]>('http://localhost:5000/api/activities')
    .then(function (response){
      setActivities(response.data);
    })
},[])


  return (
    <div>
      <h1>Reactivities</h1>
      <ul>
        {activities.map((activity:any)=>(
          <li key={activity.id}>
            {activity.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
