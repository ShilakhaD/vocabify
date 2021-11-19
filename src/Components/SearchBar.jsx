import {React, useState} from "react";
import './SearchBar.css';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from "@material-ui/core/IconButton";


const SearchBar = (props) => {
    const [wordToSearch, setWord] = useState('')

    const wordClickHandler = (val) => {
        props.getWordData(val)
    }

    const wordChangeHandler = (val) => {
        setWord(val)
    }

    return (
        <div>
            <h1>Look up a word, Learn it forever!</h1>
            <TextField
                label="Enter your word"
                className='searchTextField'
                value={wordToSearch}
                onChange={(e) => wordChangeHandler(e.target.value)}
                InputProps={{
                endAdornment: (
                <InputAdornment>
                    <IconButton className='searchIcon' onClick = {(e)=> wordClickHandler(wordToSearch)}>
                        <SearchIcon />
                    </IconButton>
                </InputAdornment>
                )}}
            />
        </div>
    )
    
}   

export default SearchBar;