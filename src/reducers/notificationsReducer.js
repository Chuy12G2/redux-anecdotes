import { createSlice } from "@reduxjs/toolkit"

const notificationsSlicer = createSlice({
  name: 'notifications',
  initialState: '',
  reducers: {
    setNotification(state, action){
      const content = action.payload
      return content
    },
    removeNotification(state, action){
        return '' 
    },
    setNotificationNew(state, action){
      const content = action.payload
      return content
    }
  }
})

export const { setNotification, removeNotification, setNotificationNew } = notificationsSlicer.actions 
export default notificationsSlicer.reducer