
import './App.css'
import ColorList from './ExerciseSet2/ColorList'
import ContactItem from './ExerciseSet2/ContactItem'




function getWelcomeMessage() {
  return "welcome to react with vite"
}

function Header() {
  return <h1>Wellcome To My Homepage!</h1>
}
function App() {
  let a = 5
  let b = 7
  let c = a + b
  const colours = [<p>Red</p>, <p>Green</p>, <p>Blue</p>, <p>Yellow</p>];
  const numbers=[1,2,3,4,5];



  const SquaredJSXOutput = [];
  for (let i = 0; i < numbers.length; i++) {
    SquaredJSXOutput.push(<p>{numbers[i]} Squared is {numbers[i] * numbers[i]}</p>);
  }

  return (
    <>
      <h2>Exercise Set 2</h2>
      <ContactItem />



      {/*<h1>Hello world</h1> 
      <p>Any kind of html element are valid here</p>
      <p> Value of c is {c+10+100}</p>
      <p>{getWelcomeMessage()}</p>
      <h2>list of colours</h2>
      <p>{colours}</p>
      <h2>list of numbers</h2>
      <p>Here is the Example</p>
      <p>X Squard is Y</p>
      <p>{SquaredJSXOutput}</p>
      {Header()}
      <Header />
      <Header />
      <Header />
      <Header />
      <ColorList />*/}
      
    </>
  )
}

export default App
