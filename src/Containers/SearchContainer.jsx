import React from "react";
import SearchBar from "../Components/SearchBar";
import axios from 'axios';
import {HOSTURL, HOSTHEADER, KEYHEADER} from "../constants.js";
import ResultList from "../Components/ResultList.jsx";
import ErrorNotification from "../Components/ErrorNotification";

class SearchContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {
            wordDetails: {},
            error: {} 
        }
    }

    getWordData = async (wordToSearch) => {
        try {
            const result =  await axios.get(`https://wordsapiv1.p.rapidapi.com/words/${wordToSearch}`, {
            headers: {
                'x-rapidapi-host': HOSTURL,
                'x-rapidapi-key': process.env.REACT_APP_KEY
            }})
        this.setState({wordDetails: result.data.results})
        this.setState({error:{}})
        } catch(error) {
            this.setState({wordDetails: {}})
            this.setState({error: error.response})
        } 
    }

    render(){
    return (
        <div>
        <SearchBar 
            getWordData={this.getWordData}
        />
        {this.state.wordDetails.length > 0 ?
            <ResultList
                data = {this.state.wordDetails}
            />
        : null}
        {this.state.error.hasOwnProperty('status') ?  
            <ErrorNotification
                status = {this.state.error.status}
            />
        :null}
        </div>
        )
    }
}

export default SearchContainer;