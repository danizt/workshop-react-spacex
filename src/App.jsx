import { useState, useEffect } from "react"
import { Heading, Image } from "@chakra-ui/react"

import { LaunchItem } from "./components/LaunchItem"
import * as API from "./services/launches"
import logo from "./assets/logo-spacex.png"

export function App() {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    API.getAllLaunches().then(setLaunches)
  }, [])

  return (
    <>
      <Image src={logo} alt="SpaceX" width={300} m={4} />
      <Heading align="center" as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      <section>
        {launches.map((launch, index) => (
          <LaunchItem key={index} {...launch} />
        ))}
      </section>
    </>
  )
}
