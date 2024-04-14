import {useState} from 'react'

export default function Login() {
  const [data, setData] = useState({
    userName: '',
    password: '',
  })

  const loginUser = (e) =>{
    e.preventDefault()
  }

  return (
    <div>
      <form from onSumit={loginUser}>
        <label>UserName</label>
        <input type='text' placeholder='enter UserName . . .' value={data.userName} onChange={(e)=> setData({...data, userName: e.target.value})}/>
        <label>Password</label>
        <input type='text' placeholder='enter Password . . .' value={data.password} onChange={(e)=> setData({...data, password: e.target.value})}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
