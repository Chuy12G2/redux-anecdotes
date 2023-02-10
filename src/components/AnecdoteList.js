import { useSelector, useDispatch } from 'react-redux'
import { voteDispatcher } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {

  const Anecdote = ({anecdote}) => {
    return (
      <div>
        <p>{anecdote.content}</p>
        <p>has {anecdote.votes}
        <button onClick={() => vote(anecdote.id)}>vote</button>
        </p>
        
      </div>
    )
  }

  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  console.log('filter', filter)
  const sortedAnecdotes = anecdotes.sort((a,b) => b.votes - a.votes)
  
  const filteredAnecdotes = []

  sortedAnecdotes.forEach(anecdotes => {
    if(anecdotes.content.includes(filter)){
      filteredAnecdotes.push(anecdotes)
    }
  });

  const vote = (id) => {
    dispatch(voteDispatcher(id))
  }

  console.log(filteredAnecdotes)

  return(
    <div>
      {filteredAnecdotes.map(anecdote =>
      <Anecdote anecdote={anecdote} key={anecdote.id}/>
    )}
  </div>  
  )
}

export default AnecdoteList