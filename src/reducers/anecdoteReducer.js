import { createSlice } from "@reduxjs/toolkit"

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteSlicer = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addAnecdote(state, action){
      console.log(action.payload)
      state.push(action.payload)
    },
    voteAnecdote(state, action){
      const votedAnecdotes = state.map(a => a.id !== action.payload ? a : {...a, votes:a.votes + 1}) 
      return votedAnecdotes
    },
    setAnecdotes(state, action){
      return action.payload
    }    
  }
})

export default anecdoteSlicer.reducer
export const { voteAnecdote, addAnecdote, setAnecdotes } = anecdoteSlicer.actions