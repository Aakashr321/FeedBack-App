import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  const fetchFeedback = async () => {
    const response = await fetch(
      "http://localhost:5000/feedback?_sort=id&_order=desc"
    );
    const data = await response.json();
    setFeedback(data);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  //To delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const newFeedback = feedback.filter((el) => {
        return el.id !== id;
      });
      setFeedback(newFeedback);
    } else {
      return;
    }
  };

  //To add feedback

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);

    setFeedback([...feedback, newFeedback]);
  };

  //Update feedback item

  const updateFeedback = (id, updItm) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItm } : item))
    );

    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  //This will set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
