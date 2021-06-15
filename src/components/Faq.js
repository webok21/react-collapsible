import React from 'react';
import Collapsible from 'react-collapsible';


const Faq = (props) => {
    return (
        <Collapsible trigger={<h4>{props.data.question}</h4>} >
            <p>
                {props.data.answer}
            </p>
        </Collapsible >
    )
}

export default Faq;