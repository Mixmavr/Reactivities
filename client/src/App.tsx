
import { ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(Response => setActivities(Response.data))

    return () => { }
  }, [])

  return (
    <>
      <Typography variant='h3'>Reactivities</Typography>
      <ul>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </ul>
    </>

  )
}

export default App
