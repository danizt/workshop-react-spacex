import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import * as API from "../services/launches"

export function LaunchDetail() {
  const [launch, setLaunch] = useState({})

  const { launchId } = useParams()

  useEffect(() => {
    API.getLaunchByFlightNumber(launchId)
      .then(setLaunch)
      .catch((err) => console.log(err))
  }, [launchId])

  return (
    <>
      <div>
        <pre>{JSON.stringify(launch)}</pre>
      </div>
    </>
  )
}
