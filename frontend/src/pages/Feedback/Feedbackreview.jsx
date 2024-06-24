import React, { useState, useEffect } from 'react';
import './Feedbackreview.css';
import Modal from '../../components/Modal/Modal';
import Sidebar from '../../components/SlideBar/Sidebar';

const Feedbackreview = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/allfeedbacks')
      .then(response => response.json())
      .then(data => setFeedbacks(data))
      .catch(error => console.error('Error fetching feedbacks:', error));
  }, []);

  const handleReplyClick = (feedback) => {
    setSelectedFeedback(feedback);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    // Clear selectedFeedback when closing the modal
    setSelectedFeedback(null);
    setShowModal(false);
  };
   

  return (
    <div>
      <Sidebar />
      <table className="table"style={{marginLeft:"150px"}}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Message</th>
            <th scope="col"></th> {/* Add an empty tha for the button column */}
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback, index) => (
            <tr key={index}>
              <td>{feedback.name}</td>
              <td>{feedback.email}</td>
              <td>{feedback.message}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleReplyClick(feedback)}
                >
                  Reply
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && <Modal feedback={selectedFeedback} onClose={handleCloseModal} />}
    </div>
  );
};

export default Feedbackreview;
