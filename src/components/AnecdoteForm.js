
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationNew, removeNotification } from '../reducers/notificationsReducer'
import anecdoteService from '../services/anecdotes'

export const AnecdoteForm = () => {
  
  const dispatch = useDispatch()
 
  const handleSubmit = async (event) => {
  event.preventDefault()
  const content = event.target.anecdote.value
  const newAnecdote = await anecdoteService.createNew(content)
  dispatch(addAnecdote(newAnecdote))
  const newNotification = `You created ${content}`
  dispatch(setNotificationNew(newNotification))
  event.target.anecdote.value = ''
  sleep()  
  }

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function sleep() {
    await timeout(3000);
    dispatch(removeNotification())
  }

  sleep()
    
  return(
  <div>
    <h2>create new</h2>
    <form onSubmit={handleSubmit}>
      <div><input name='anecdote'/></div>
      <button type='submit'>create</button>
    </form>
  </div>
  )

}

export default AnecdoteForm