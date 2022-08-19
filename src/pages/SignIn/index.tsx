import { Input } from "../../components/Input"

export function SignIn() {
    return (
        <div>
            <h2>Fazer login</h2>
            <Input 
                label={'E-mail'}
                placeholder="E-mail"/>
            <button>Login</button>
        </div>
    )
} 