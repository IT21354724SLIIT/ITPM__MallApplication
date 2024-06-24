import React, { useState } from 'react';
import { useEffect } from 'react';
import Feedbackreview from '../../pages/Feedback/Feedbackreview';

function Modal({ feedback, onClose }) {
  useEffect(() => {
    // Initialize Bootstrap modal
    new bootstrap.Modal(document.getElementById('exampleModal')).show();
  }, []);
  const [replyMessage, setReplyMessage] = useState('');




  const handleSend = async () => {
    try {
      const response = await fetch('http://localhost:4000/sendReply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: feedback.email,
          message: replyMessage,
        }),
      });
      if (response.ok) {
        console.log('Reply sent successfully');
        onClose();
        window.location.href = "/Feedbackreview";
        
      } else {
        console.error('Failed to send reply');
      }
    } catch (error) {
      console.error('Error sending reply:', error);
    }
  };

  // const handleSend = async () => {
  //   try {
  //     const response = await fetch('http://localhost:4000/sendReply', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email: feedback.email,
  //         message: replyMessage,
  //       }),
  //     });
  //     if (response.ok) {
  //       console.log('Reply sent successfully');
  //       //  onClose();
  //       window.location.href = "/Feedbackreview"; // Close the modal
  //     } else {
  //       console.error('Failed to send reply');
  //     }
  //   } catch (error) {
  //     console.error('Error sending reply:', error);
  //   }
  // };

   

  return (
    <div className="modal" id="exampleModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Replying to the Feedback</h5>
            <button type="button" className="btn-close" onClick={onClose}   aria-label="Close">
            </button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="toInput" className="form-label">To:</label>
              <input type="email" className="form-control" id="toInput" value={feedback.email} readOnly />
            </div>
            <div className="mb-3">
              <label htmlFor="replyInput" className="form-label">Reply:</label>
              <textarea className="form-control" id="replyInput" rows="3" placeholder="Enter your reply" value={replyMessage} onChange={(e) => setReplyMessage(e.target.value)}></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleSend}>Send</button>
             
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
