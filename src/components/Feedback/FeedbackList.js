import React from "react";
import s from './FeedbackList.module.css'



export default function FeedbackList ({ options, onLeaveFeedback }) {
    return (
    <ul className={s.list}>
        {options.map(el => (
          <li key={el}>
            <button
              type="button"
              name={el}
              onClick={onLeaveFeedback}
              className ={s.button}
            >
              {el}
            </button>
          </li>
        ))}
      </ul>
    );
    }

