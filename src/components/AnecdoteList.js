import { useSelector, useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationsReducer'
import { updateAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {

  const Anecdote = ({anecdote}) => {
    return (
      <div>
        <p>{anecdote.content}</p>
        <p>has {anecdote.votes}
        <button onClick={() => {
          vote(anecdote)
          createNotification(anecdote.content)
          }}>vote</button>
        </p>
        
      </div>
    )
  }

  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const arrayToSort = [...anecdotes]
  const sortedAnecdotes = arrayToSort.sort((a,b) => b.votes - a.votes)
  
  const filteredAnecdotes = []

  sortedAnecdotes.forEach(anecdotes => {
    if(anecdotes.content.includes(filter)){
      filteredAnecdotes.push(anecdotes)
    }
  });

  const vote = (anecdote) => {
    dispatch(updateAnecdote(anecdote))
  }

  const createNotification = (content) => {
    const newContent = `You voted  '${content}'`
    dispatch(setNotification(newContent, 3))
  }

  return(
    <div>
      {filteredAnecdotes.map(anecdote =>
      <Anecdote anecdote={anecdote} key={anecdote.id}/>
    )}
  </div>  
  )
}

export default AnecdoteList