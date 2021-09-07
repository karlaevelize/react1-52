import { useState, useEffect } from "react";
import axios from "axios"

//Step 1. Fetch the Data
//Step 2. Console.log what you got back
//Step 3. Put the data in the state
//Step 4. Map and display

export default function FetchingData(){

  const [cats, setCats] = useState()

  useEffect(() => {
    async function fetchData(){
      const response = await axios.get("https://api.thecatapi.com/v1/images/search")
      console.log("response", response.data)
      setCats(response.data) //IMPORTANT, put data in the state
    }
    fetchData() //IMPORTANT, call the function
  }, [])

  console.log(cats)

  return(
    <div>
      {!cats ? "Cats are busy" : cats.map(cat => <img 
        key={cat.id} style={{maxWidth: "100%"}} 
        src={cat.url}/>)}
    </div>
  )
}