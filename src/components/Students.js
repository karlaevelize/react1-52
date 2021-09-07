import StudentsCard from "./StudentsCard"

export default function Students(){

  const students = [
    { name: "John", info: "Always late", smart: true },
    { name: "John", info: "Never does homework", smart: true },
    { name: "Elizabeth", info: "Finished everything", smart: true },
    { name: "Anthony", info: "Always late", smart: false },
    { name: "Rainbow", info: "Always late", smart: true},
    { name: "Jane", info: "Never does homework", smart: false}
  ]

  return (
    <div>
      {students.map((student, index) => {
        return <StudentsCard key={index} name={student.name} smart={student.smart}/>
      })}
    </div>
  )
}