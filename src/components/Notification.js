import { useSelector } from "react-redux"

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const notDisplay = {
    display: 'none'
  }

  const styleToRender = notification ? style : notDisplay

  return (
    <div style={styleToRender}>
      {notification}
    </div>
  )
}

export default Notification