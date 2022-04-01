import { useState, useEffect } from "react"
import * as API from "./services/launches"

export function App() {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    API.getAllLaunches().then(setLaunches)
  }, [])

  return (
    <>
      <h1>SpaceX Launches</h1>
      <ul>
        {launches.map((launch, index) => (
          <li key={index}>
            {launch.mission_name} ({launch.launch_year})
          </li>
        ))}
      </ul>
    </>
  )
}
