export default function StudentsCard({ name, smart }){

  return(
    <div>
      <h3>{name}</h3>
      <p>Smart: {smart ? "The brightest" : "Not on the strongest side"}</p>
    </div>
  )
}