import { useState, useEffect } from "react"
import { Heading } from "@chakra-ui/react"

import { LaunchItem } from "./LaunchItem"
import * as API from "../services/launches"

export function LaunchList() {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    API.getAllLaunches()
      .then(setLaunches)
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Heading align="center" as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      {launches.length === 0 ? (
        <div>Loading</div>
      ) : (
        <section>
          {launches.map((launch, index) => (
            <LaunchItem key={index} {...launch} />
          ))}
        </section>
      )}
    </>
  )
}
