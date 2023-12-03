import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}> {text} </button>
  )}

  const StatisticsLine = ({text , value}) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }

  const Statistics = ({good, neutral, bad}) => {
    const total = good + bad + neutral;
    const avg = ((good + (bad * - 1)) / total).toFixed(2);
    const pos = ((good / total) * 100).toFixed(2);

    if(total == 0) {
      return(
        <div>
          <p>No feed back available </p>
        </div>
      )
    }

    return (
      <table>
        <tbody>         
          <StatisticsLine text="good" value={good}/>
          <StatisticsLine text="neutral" value={neutral}/>
          <StatisticsLine text="bad" value={bad}/>
          <StatisticsLine text="total" value={total}/>
          <StatisticsLine text="average" value={avg}/>
          <StatisticsLine text="percentage" value={`${pos}%`}/>
        </tbody>
      </table>
  )}


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h2>Give FeedBack</h2>
      <Button text="good" onClick={() => setGood(good + 1)}/>
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)}/>
      <Button text="bad" onClick={() => setBad(bad + 1)}/>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
