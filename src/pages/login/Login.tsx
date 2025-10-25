import { useState, type ChangeEvent } from "react"
import Button from "../../components/button/Button"
import Container from "../../components/container/Container"
import { useShoppingCartContext } from "../../context/ShoppingCartContext"

function Login() {

    const {handleLogin} = useShoppingCartContext()

    const [user, setuser] = useState({
      username: "",
      password: ""
    })

    const handlechnage = (e: React.ChangeEvent<HTMLInputElement>)=>{

      const {name , value} = e.target;
      setuser({
        ...user,
        [name] : value
      });
      
    }
  return (
    <div>
        <Container>
        <div className="bg-slate-200 p-12 rounded">
            <input onChange={handlechnage} name="username" type="text" placeholder="username" value={user.username} />
            <input onChange={handlechnage} name="password" type="password" placeholder="password" value={user.password} />
            <Button onClick={()=>handleLogin(user.username,user.password)}>login</Button>
        </div>
        </Container>
    </div>
  )
}

export default Login