import React, { useEffect, useState } from "react"

const FetchData = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch('./sample.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
  
  useEffect(() => {
    fetchUserData()
  }, [])
  console.log(users);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchData;