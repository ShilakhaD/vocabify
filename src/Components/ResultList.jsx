import React from 'react';
import './ResultList.css'

const ResultList = (props) => {
    return (
        <div className='resultList'>
            <ul>
                {props.data.map(meaning => {
                    return(  
                        <div>
                        <li>
                            {meaning.definition}
                        </li>
                        </div>
                    )
                })}
            </ul>
            </div>
    )
}

export default ResultList