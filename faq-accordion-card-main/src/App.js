import './App.css';
import FAQ from './FAQ/FAQ.js'
import questions from './Data/Data'
import woman from './Data/Woman'
import box from './Data/Box'
import wMobile from './Data/WomanMobile'
import shadow from './Data/ShadowMobile';

function App() {

  let content = <div><p>Hello</p></div>
  console.log(questions)
  content = questions.map((q, index) => {
    return(
    <FAQ
    key = {index}
    question = {q.question}
    answer = {q.answer}
     />)
  })

  return (
    <div className="App">
      <div className="card">

      <div class = "picture">
        <div class = "wMobile">{wMobile}</div>
      </div>

      <div className = "obj">
        <div className = "woman">{woman}</div>
        <div className = "box">{box}</div>
      </div>

        <div className = "faq">
        <h1>FAQ</h1>
        {content}
        </div>
      </div>
    </div>
  );
}

export default App;
