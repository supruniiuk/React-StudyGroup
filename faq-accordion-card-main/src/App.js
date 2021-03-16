import './App.css';
import FAQ from './FAQ.js'
import questions from './Data'

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
      <div class = "girl">
        <p>NOTHING SPECIAL</p>
        </div>

        <div class = "questions">
        <h1>FAQ</h1>
        {content}
        </div>
      </div>
    </div>
  );
}

export default App;
