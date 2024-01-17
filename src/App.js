import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// using custom API as provided from the course resources 
const url = 'https://course-api.com/react-tours-project'

function App() {
  //state values - loading and tours value
  //using useState hooks 
  //by default - loading will be true --> we will see the Loading component else Tours component

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  // Removing Tour functionality -- it looks for the id 
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
// Fetching Tour data
  const fetchTours = async () => {
    setLoading(true)
    // trying to catch errors 
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  //runs on initial render
  useEffect(() => {
    fetchTours()
  }, [])
  // one return for loading -- i.e -- loading - true
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  // one return for not loading -- i.e -- loading - false
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>Oops! Looks like there are no tours left</h2>
          <h3>Click on refresh to start over</h3>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      {/* To display the Tours value - content from the api will be loaded 
      Storing Tours prop {tours} for Tours component*/}
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
