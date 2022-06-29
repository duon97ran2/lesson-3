import { useState } from "react"
import style from "./square.module.css"

const Square = () => {
  const [status, setStatus] = useState(false);
  return <button onClick={() => { setStatus(!status) }} className={style.square} >{status ? "x" : ""}</button>
}

export default Square