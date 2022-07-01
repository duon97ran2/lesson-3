import style from "./square.module.css"


const Square = ({ value, handlePlay, winner }) => {
  function setColor(value) {
    if (winner) {
      return "green"
    }
    if (value == "x") {
      return "red"
    }
    if (value == "o") {
      return "blue"
    }
  }
  return <button className={style.square} onClick={handlePlay} style={{ background: setColor(value, winner) }} >{value}</button>
}

export default Square