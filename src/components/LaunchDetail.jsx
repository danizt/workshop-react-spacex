import { useParams } from "react-router-dom"

export function LaunchDetail() {
  const { launchId } = useParams()

  return (
    <>
      <div>Hola: {launchId}</div>
    </>
  )
}
