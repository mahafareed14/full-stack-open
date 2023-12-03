import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Title = ({title}) => {
  return (
    <h2>{title}</h2>
  )
}

const Anecdote = ({anecdote , votes}) => {
  return (
    <>
    <p>{anecdote}</p>
    <p>has {votes} votes</p>
    </>
  )
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const maxVotes = Math.max(...votes);
  const ind = votes.indexOf(maxVotes);

  const changeAnecdote = () =>  {
    const index = Math.floor(Math.random() * anecdotes.length);
    setSelected(index);
  }

  const addVotes = () => {
    let copyArr = [...votes];
    copyArr[selected] += 1;
    setVotes(copyArr);
  }

  return (
    <div>
      <Title title="Anecdotes of the day" />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={changeAnecdote} text="Next Anecdotes"/>
      <Button handleClick={addVotes} text="Vote"/>
      <Title title="Anecdotes with most votes" />
      <Anecdote anecdote={anecdotes[ind]} votes={maxVotes} />
    </div>
  )
}

export default App
