
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationNew, removeNotification } from '../reducers/notificationsReducer'


export const AnecdoteForm = () => {
  
  const dispatch = useDispatch()
 
  const handleSubmit = (event) => {
  event.preventDefault()
  const content = event.target.anecdote.value
  dispatch(addAnecdote(content))
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