import React, { useEffect, useState } from 'react';
import './ErrorNotification.css'

const ErrorNotification = (props) => {
    console.log(props, "props in error component")
    const [alertState, setAlertState] =  useState(true)
    const [alertText, setAlertText] = useState('')

useEffect(() => {
    if(props.status.status === 404){
        setAlertText('Oops! Looks like the word does not exist. Please check your word and try again')
    }
    if(props.status.status === 500){
        setAlertText('Oops! Something went wrong, please check back in a few momemts')
    }
})
const closeNotification = () => {
    setAlertState(false)
}
    return (
        <div className={alertState === true ? "alertOpen": "alertClose"}>
            <span className="closebtn" onClick={closeNotification}>&times;</span>
            {alertText}
        </div>
    )
}

export default ErrorNotification