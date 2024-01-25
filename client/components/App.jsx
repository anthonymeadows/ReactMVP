import React, { useEffect, useState } from "react";

const App = () => {

  const [message, setMessage] = useState('')
  const [isAlive, setAlive] = useState(true)
  
  useEffect(() => { //USED FOR API CALLS
    async function fetchData() {
      try {
        const response = await fetch('/api');
        const newMessage = await response.json()
        setMessage(newMessage.message)
      } catch (error) {
        console.error('Error on fetch: ', error)
      }
    }
  fetchData()

  }, [isAlive]);

  return (
    <>
      <div> {message} </div>
    </>
  );
};

export default App;
