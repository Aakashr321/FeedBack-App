import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./shared/Spinner";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback yet</p>;
  } else
    return isLoading ? (
      <Spinner />
    ) : (
      <div className="feeeback-list">
        {feedback.map((item) => (
          <FeedbackItem key={item.id} item={item} />
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
