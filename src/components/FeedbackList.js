import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

function FeedbackList() {

  const {feedback} =useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet</p>;
  } else
    return (
      <div className="feeeback-list">
        {feedback.map((item) => (
          <FeedbackItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    );

  // return (
  //   <div className="feeeback-list">
  //     {feedback.map((item) => {
  //       return (
  //         <FeedbackItem
  //           deleteHandler={deleteHandler}
  //           key={item.id}
  //           item={item}
  //         />
  //       );
  //     })}
  //   </div>
  // );
}


export default FeedbackList;
