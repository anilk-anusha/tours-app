import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

// using custom API as provided from the course resources 
const url = 'https://course-api.com/react-tours-project'
function App() {
  //state values - loading and tours value
  //using useState hooks 
  //by default - loading will be true --> we will see the Loading component else Tours component

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // Fetching Tours data
  const fetchTours = async () => {
    // extra precaution to fetch the data
    setLoading(true);
    //to catch network errors
    try{
      const response = await fetch(url)
      // to run json 
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch(error){
      setLoading(false)
      console.log(error)
    }
  };

  useEffect(() => {
    fetchTours();
  }, [])

  //one return for loading -- i.e -- loading - true
  if (loading) {
    return (
      <main>
        {/* Return content from Loading component */}
        <Loading />
      </main>
    )
  }
  //one return for not loading so the Tours component is returned-- i.e -- loading - false
  return (
    <main>
      {/* Return content from Tours component */}
      <Tours />
    </main>
  )


  return <h2>Tours Project Setup</h2>
}

export default App
