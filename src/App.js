import './App.css';
import styled from "styled-components"
import Square from './components/square/squares';

function App() {
  return (
    <Board>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </Board>
  );
}

function Box(props) {
  return (
    <div style={{ margin: "20px auto", backgroundColor: props.color, width: "50px", height: "50px", color: props.textColor, textAlign: "center" }} >
      <Text value={props.color} textColor={props.textColor} />
    </div>
  )
}

function Text({ value, textColor }) {
  return <h3 style={{ color: textColor }} >{value}</h3>
}

const HeroText = styled.h3`
  color: ${props => props.textColor};
  background: ${props => props.backgroundColor};
`
const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap:10px;
  max-width: 200px;
  margin: auto;
`

export default App;
