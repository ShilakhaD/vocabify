import React from "react";
import SearchBar from "../Components/SearchBar";
import axios from 'axios';

class SearchContainer extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            wordDetails:{}
        }
    }

    getOneWordData = async (wordToSearch) => {
        const result =  await axios.get(`https://wordsapiv1.p.rapidapi.com/words/${wordToSearch}`, {
            headers: {
                'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
                'x-rapidapi-key': '649dc644ddmshf772a2206d780e7p136ff6jsnd4074b64ab92'
            }})
        this.setState({wordDetails: result.data})
    }

    render(){
    return (
        <SearchBar 
            getOneWordData={this.getOneWordData}
            data = {this.state.wordDetails}
        />
        )
    }
}

export default SearchContainer;