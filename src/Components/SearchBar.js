import React from "react";
import './SearchBar.css';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from "@material-ui/core/IconButton";


class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            wordToSearch: ''
        }
    }

    wordClickHandler = (val) => {
        this.props.getOneWordData(val)
    }

    wordChangeHandler = (val) => {
        this.setState({wordToSearch: val})
    }

    render() {
        console.log(this.props.data)
        return (
            <div>
                <h1>Look up a word, Learn it forever!</h1>
                <TextField
                    label="Enter your word"
                    className='searchTextField'
                    value={this.state.wordToSearch}
                    onChange={(e) => this.wordChangeHandler(e.target.value)}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment>
                            <IconButton className='searchIcon' onClick = {(e)=> this.wordClickHandler(this.state.wordToSearch)}>
                            <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                        )
                    }}
                />

                <div>
                    <ul>
                        {this.props.data.results ? this.props.data.results.map(meaning => {
                          return(  
                              <div className="resultList">
                                <li>
                                    {meaning.definition}
                                </li>
                              </div>
                          )
                        }):''}
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default SearchBar;