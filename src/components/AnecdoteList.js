import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationsReducer'
import { removeNotification } from '../reducers/notificationsReducer'

const AnecdoteList = () => {

  const Anecdote = ({anecdote}) => {
    return (
      <div>
        <p>{anecdote.content}</p>
        <p>has {anecdote.votes}
        <button onClick={() => {
          vote(anecdote.id)
          createNotification(anecdote.content)
          removeNotificationFunc(anecdote.id)
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

  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }

  const createNotification = (content) => {
    const newContent = `You voted  '${content}'`
    dispatch(setNotification(newContent))
  }
  
  const removeNotificationFunc = (id) => {
    function timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function sleep() {
      await timeout(3000);
      dispatch(removeNotification(id))
    }

    sleep()
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