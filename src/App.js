import './App.css';
import {Button, FormControlLabel, FormGroup, Slider, Switch, TextField, Typography} from "@mui/material";
import {useState} from "react";

function App() {
    const [buttonContent, setButtonContent] = useState('Generate');
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(12);
    const [upperCase, setUpperCase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [specialChars, setSpecialChars] = useState(false);

    const generatePassword = () => {
        let s = 'abcdefghijklmnopqrstuvwxyz';
        if (numbers) {
            s += '0123456789'
        }
        if (upperCase) {
            s += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }
        if (specialChars) {
            s += '/-.,[]{}:;^$&%*#+@'
        }
        let p = getRandomChars(s);
        setPassword(p);
        navigator.clipboard.writeText(p).then(() => {
        });
        setButtonIcon();
    }

    const setButtonIcon = () => {
        setButtonContent('✅');
        delay(1000).then(() => {
            setButtonContent('Generate');
        });
    }

    const getRandomChars = (s) => {
        let result = '';
        let characters = s;
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const delay = (time) => {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    return (
        <div className="App">
            <h1>PAWOG</h1>
            <FormGroup>
                <Typography id="input-slider" gutterBottom>
                    Passwortlänge
                </Typography>
                <Slider
                    defaultValue={12}
                    valueLabelDisplay="auto"
                    aria-labelledby="input-slider"
                    step={1}
                    marks
                    min={8}
                    max={35}
                    value={length}
                    onChange={(event) => setLength(event.target.value)}
                />
                <FormControlLabel
                    control={<Switch defaultChecked value={upperCase} onChange={() => setUpperCase(!upperCase)}/>}
                    label="Grossbuchstaben"/>
                <FormControlLabel
                    control={<Switch defaultChecked value={numbers} onChange={() => setNumbers(!numbers)}/>}
                    label="Zahlen"/>
                <FormControlLabel
                    control={<Switch value={specialChars} onChange={() => setSpecialChars(!specialChars)}/>}
                    label="Sonderzeichen"/>
                <br></br>
                <TextField id="outlined-basic" label="Passwort" variant="outlined" value={password}/>
                <br></br>
                <Button id="generate" variant="contained" onClick={() => generatePassword()}>{buttonContent}</Button>
            </FormGroup>
        </div>
    );
}

export default App;
