import React, { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  const fetchFeedback = async () => {
    const response = await fetch("/feedback?_sort=id&_order=desc");
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

  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
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
