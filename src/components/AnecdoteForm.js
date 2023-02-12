
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationsReducer'


export const AnecdoteForm = () => {
  
  const dispatch = useDispatch()
 
  const handleSubmit = async (event) => {
  event.preventDefault()
  const content = event.target.anecdote.value
  dispatch(addAnecdote(content))
  const newNotification = `You created ${content}`
  dispatch(setNotification(newNotification, 3))
  event.target.anecdote.value = ''
  }

    
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