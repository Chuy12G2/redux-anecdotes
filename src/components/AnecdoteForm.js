
import { useDispatch } from 'react-redux'
import { createAnecdoteDispatcher } from '../reducers/anecdoteReducer'

export const AnecdoteForm = () => {
  
  const dispatch = useDispatch()
 
  const createAnecdote = (event) => {
  event.preventDefault()
  const content = event.target.anecdote.value
  dispatch(createAnecdoteDispatcher(content))
  event.target.anecdote.value = ''
  }
    
  return(
  <div>
    <h2>create new</h2>
    <form onSubmit={createAnecdote}>
      <div><input name='anecdote'/></div>
      <button type='submit'>create</button>
    </form>
  </div>
  )

}

export default AnecdoteForm