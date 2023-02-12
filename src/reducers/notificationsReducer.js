import { createSlice } from "@reduxjs/toolkit"

const notificationsSlicer = createSlice({
  name: 'notifications',
  initialState: '',
  reducers: {
    createNotification(state, action){
      const content = action.payload
      return content
    },
    removeNotification(state, action){
        return '' 
    }
  }
})

export const { createNotification, removeNotification } = notificationsSlicer.actions 
export default notificationsSlicer.reducer

export const setNotification = (notification, time) => {
  return (dispatch) => {
    dispatch(createNotification(notification))
    setTimeout(() => {
      dispatch(removeNotification())
    }, time*1000);
  }
}