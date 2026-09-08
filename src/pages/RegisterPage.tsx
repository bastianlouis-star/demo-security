import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from "@mui/material"
import { useActionState } from "react"

function RegisterPage() {

    function submit(_, newValues: FormData) {
        console.log(Object.fromEntries(newValues.entries()))
        // envoyer les données vers l'api python
        // rediriger vers la page de login
        return {
            errors: [],
            data: Object.fromEntries(newValues.entries())
        }
    }

    const [formState, action] = useActionState(submit, {
        errors: [],
        data: { email: '', password: '', username: '', role: 'customer' }
    })

    return <>
        {formState.errors}
        <Paper elevation={2} sx={{padding: '20px'}}>
            <form action={action} style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <div>
                    <TextField defaultValue={formState.data.username} name="username" label="Username"></TextField>
                </div>
                <div>
                    <TextField defaultValue={formState.data.email} name="email" label="Email" type="email"></TextField>
                </div>
                <div>
                    <FormControl fullWidth>
                        <InputLabel id="role">Role</InputLabel>
                        <Select defaultValue={formState.data.role} name="role" fullWidth label='Role' labelId="role">
                            <MenuItem value='admin'>admin</MenuItem>
                            <MenuItem value='customer'>customer</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <TextField defaultValue={formState.data.password} name="password" label="Mot de passe" type="password"></TextField>
                </div>
                <div>
                    <Button type="submit" variant="contained">Créer un compte</Button>
                </div>
            </form>
        </Paper>
    </>
}

export default RegisterPage