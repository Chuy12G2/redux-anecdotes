import { useDispatch } from "react-redux"
import { setFilter } from "../reducers/filterReducer"


const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (value) =>{
    dispatch(setFilter(value))
  }
  return(
    <div>
      filter
      <input onChange={(event) => {handleChange(event.target.value)}}></input>
    </div>
  )
}

export default Filter