import TextNotification from "./components/TextNotification"
import { mockMessage } from "./helpers"
import { useEffect, useState } from "react"

function App() {
  const sendReply = (message) => {
    console.log('Replied', message)
    setIsNotification(false)
  }
  const [isNotification, setIsNotification] = useState(false)

  useEffect(() => {
    if(!isNotification){
      setTimeout(() => {
        setIsNotification(true)
      },5000)
    }
  },[isNotification])

  return (
    <main className="relative">
     <TextNotification
        isVisible={isNotification}
        sendReply={sendReply}
        textMessage={mockMessage}
        navigateToInboxThread={(id) => console.log(`navigate to threaded - ${id}`) } />
    </main>
  )
}

export default App
