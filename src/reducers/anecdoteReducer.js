import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'


const anecdoteSlicer = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action){
      const votedAnecdotes = state.map(a => a.id !== action.payload.id ? a : {...a, votes:a.votes + 1}) 
      return votedAnecdotes
    },
    setAnecdotes(state, action){
      return action.payload
    },
    appendAnecdote(state, action){
      state.push(action.payload)
    }    
  }

})

export default anecdoteSlicer.reducer
export const { voteAnecdote, setAnecdotes, appendAnecdote } = anecdoteSlicer.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const notes = await anecdoteService.getAll()
    dispatch(setAnecdotes(notes))
  }
}

export const addAnecdote = (content) => {
  return async (dispatch) => {
    const newNote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newNote))
  }
}

export const updateAnecdote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = {...anecdote, votes: anecdote.votes + 1}
    const responseAnecdote = await anecdoteService.update(anecdote.id, updatedAnecdote)
    dispatch(voteAnecdote(responseAnecdote))
  }
}