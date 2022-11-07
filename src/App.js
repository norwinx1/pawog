import './App.css';
import {Button, FormControlLabel, FormGroup, Slider, Switch, TextField, Typography} from "@mui/material";
import {useState} from "react";

function App() {
    const [buttonContent, setButtonContent] = useState('Generate');
    const [password, setPassword] = useState('');

    const generatePassword = () => {
        setPassword('RandomGeneratedPassword');
        setButtonIcon();
    }

    const setButtonIcon = () => {
        setButtonContent('✅');
        delay(1000).then(() => {
            setButtonContent('Generate');
        });
    }

    const delay = (time) => {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    return (
        <div className="App">
            <h1>PAWOG</h1>
            <FormGroup>
                <Typography id="input-slider" gutterBottom>
                    Passwort Länge
                </Typography>
                <Slider
                    defaultValue={12}
                    valueLabelDisplay="auto"
                    aria-labelledby="input-slider"
                    step={1}
                    marks
                    min={8}
                    max={35}
                />
                <FormControlLabel control={<Switch defaultChecked/>} label="Gross- und Kleinbuchstaben"/>
                <FormControlLabel control={<Switch defaultChecked/>} label="Zahlen"/>
                <FormControlLabel control={<Switch/>} label="Sonderzeichen"/>
                <br></br>
                <TextField id="outlined-basic" label="Passwort" variant="outlined" value={password}/>
                <br></br>
                <Button id="generate" variant="contained" onClick={() => generatePassword()}>{buttonContent}</Button>
            </FormGroup>
        </div>
    );
}

export default App;
