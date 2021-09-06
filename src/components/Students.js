import StudentsCard from "./StudentsCard"

export default function Students(){

  const students = [
    { name: "John", smart: true },
    { name: "John", smart: true },
    { name: "Elizabeth", smart: true },
    { name: "Anthony", smart: false },
    { name: "Rainbow", smart: true},
    { name: "Jane", smart: false}
  ]

  return (
    <div>
      {students.map((student, index) => {
        return <StudentsCard key={index} name={student.name} smart={student.smart}/>
      })}
    </div>
  )
}