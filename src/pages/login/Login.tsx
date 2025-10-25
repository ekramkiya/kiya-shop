import Button from "../../components/button/Button"
import Container from "../../components/container/Container"
import { useShoppingCartContext } from "../../context/ShoppingCartContext"

function Login() {
    const {handleLogin} = useShoppingCartContext()
  return (
    <div>
        <Container>
        <div className="bg-slate-200 p-12 rounded">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <Button onClick={handleLogin}>login</Button>
        </div>
        </Container>
    </div>
  )
}

export default Login