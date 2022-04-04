import { Image } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"

import { LaunchList } from "./components/LaunchList"
import { LaunchDetail } from "./components/LaunchDetail"
import logo from "./assets/logo-spacex.png"

export function App() {
  return (
    <>
      <Image src={logo} alt="SpaceX" width={300} m={4} />
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetail />} />
      </Routes>
    </>
  )
}
