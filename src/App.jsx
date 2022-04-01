import { useState, useEffect } from "react"
import * as API from "./services/launches"
import logo from "./assets/logo-spacex.png"

export function App() {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    API.getAllLaunches().then(setLaunches)
  }, [])

  return (
    <>
      <img src={logo} alt="SpaceX" width={300} />
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
