import { useState } from "react"
import StudentsCard from "./StudentsCard"

export default function Counter(){

  const [ count, setCount ] = useState(0)
  const [ text, setText ] = useState(false)

  const initialstate = [
    { name: "John", info: "Always late", smart: true },
    { name: "John", info: "Never does homework", smart: true },
    { name: "Elizabeth", info: "Finished everything", smart: true },
    { name: "Anthony", info: "Always late", smart: false },
    { name: "Rainbow", info: "Always late", smart: true},
    { name: "Jane", info: "Never does homework", smart: false}
  ]

  const [ students, setStudents] = useState(initialstate)

  console.log("count", count)
  // console.log("count", setCount, output: function

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>

      <br/><br/>

      {/* !text toggles the value from true to false */}
      <button onClick={() => setText(!text)}>{text ? "true" : "false"}</button>

      <button onClick={() => setStudents([])}>Clear</button>
      {/* mapping over the students */}
      {students.map((student, index) => {
        return <StudentsCard key={index} name={student.name} smart={student.smart}/>
      })}
    </div>
  )
} 