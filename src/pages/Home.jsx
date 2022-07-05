import { useState, useEffect } from 'react'
import { Card } from '../components/Card'
import styles from './Home.module.css'

export function Home() {
  const [studentName, setStudentName] = useState("")
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({ name: '', avatar: '' })

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }

    setStudents(prevState => [...prevState, newStudent])
  }

  useEffect(() => {
    fetch('https://api.github.com/users/wellrenato12')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
  }, [])

  return (
    <div className={styles.container}>
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite o nome ..."
        onChange={event => setStudentName(event.target.value)}
      />
      <button onClick={handleAddStudent} type="button">Adicionar</button>

      {
        students.map(student => {
          return <Card key={student.time} name={student.name} time={student.time} />
        })
      }
    </div>
  )
}