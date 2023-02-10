import { useDispatch } from "react-redux"
import { filterChange } from "../reducers/filterReducer"


const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (value) =>{
    dispatch(filterChange(value))
  }
  return(
    <div>
      filter
      <input onChange={(event) => {handleChange(event.target.value)}}></input>
    </div>
  )
}

export default Filter