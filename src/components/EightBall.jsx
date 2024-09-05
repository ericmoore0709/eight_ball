import PropTypes from 'prop-types';
import defaultData from '../assets/sampleData';
import './eightBall.css';
import { useState } from 'react';

export default function EightBall({ answers = defaultData }) {

    const [answer, setAnswer] = useState({ msg: "Ask a question.", color: "black" });

    const onClick = () => {

        const randIdx = Math.floor(Math.random() * (defaultData.length));
        setAnswer(answers[randIdx]);
    }

    return (
        <div className='answer' key={answer.msg} style={{ backgroundColor: answer.color, color: 'white' }} onClick={onClick}>
            <span>{answer.msg}</span>
        </div>
    );
}

EightBall.propTypes = {
    answers: PropTypes.arrayOf(PropTypes.shape({
        msg: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
    }))
}