import { useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Adil", city: "Agadir" },
    { id: 2, name: "Kamal", city: "Agadir" },
    { id: 3, name: "Fatima", city: "Casablanca" },
    { id: 4, name: "Said", city: "Tanger" }
  ])
  const [city, setCity] = useState("");

  const filteredUsers = city ? users.filter(user => user.city == city) : users;

  return (
    <>
      <select onChange={e => setCity(e.target.value)}>
        <option value="">Séléctionner une ville</option>
        <option value="Agadir">Agadir</option>
        <option value="Casablanca">Casablanca</option>
        <option value="Tanger">Tanger</option>
      </select>

      <br/>
      <br/>

      <table border={1}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>City</th>
        </tr>
        {
          filteredUsers.map(user => {
            return <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.city}</td>
            </tr>
          })
        }
      </table>
    </>
  )
}

export default App
