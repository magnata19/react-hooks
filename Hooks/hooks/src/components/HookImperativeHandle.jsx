import { useRef } from "react"
import SomeComponent from "./SomeComponent"

const HookImperativeHandle = () => {
  
  const componentRef = useRef();
  return (
    <div>
      <h2>HookImperativeHandle</h2>
      <SomeComponent ref={componentRef}/>
      <button onClick={() => componentRef.current.validate()}>Validate</button>
      <hr />
    </div>
  )
}

export default HookImperativeHandle