import { useState, useEffect } from "react"
import { Heading, Box, Image, Flex, Text, Spacer, Tag } from "@chakra-ui/react"
import { HiCalendar } from "react-icons/hi"
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
          <Box key={index} bg="gray.100" p={4} m={4} borderRadius="lg">
            <Flex>
              <Text fontSize="2xl" mr={4}>
                Mission <strong>{launch.mission_name}</strong> (
                {launch.launch_year})
              </Text>
              <Spacer />
              <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
                {launch.launch_success ? "Success" : "Failure"}
              </Tag>
            </Flex>
            <Flex align="center">
              <HiCalendar />
              <Text fontSize="sm" ml={1}>
                {launch.launch_date_local.split("T")[0]}
              </Text>
            </Flex>
          </Box>
        ))}
      </section>
    </>
  )
}
