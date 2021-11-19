import { Button } from "@mui/material";
import React from "react";
import {LEARN, DICTIONARY, VOCABULARY_LISTS, TEST_PREP, LOGIN, SIGN_UP, SITE_NAME} from "../constants.js";
import './NavBar.css'


const NavBar = () => {
    return (
        <div className='NavBar'>
            <div className='NavLinks'>
                <a className='siteName' href='/home'>{SITE_NAME}</a>
                <a href='/home'>{LEARN}</a>
                <a href='/dictionary'>{DICTIONARY}</a>
                <a href='/vocabList'>{VOCABULARY_LISTS}</a>
                <a href='/testPrep'>{TEST_PREP}</a>
                <div className='actionButtons'>
                <Button className='login'>{LOGIN}</Button>
                <Button className='signUp'>{SIGN_UP}</Button>
                </div>
            </div>

        </div>
    )
}

export default NavBar