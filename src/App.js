import { useState } from "react";

export default function MyApp() {
  const [count, setCount] = useState(0)

  function handeClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Hello, World!</h1>
      <MyButton count={count} onClick={handeClick}/>
      <MyButton count={count} onClick={handeClick}/>
    </div>
  )
}

function MyButton({count, onClick}) {
  return <button onClick={onClick}>Clicked {count} times!</button>
}