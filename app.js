const express = require("express");
const bodyParser = require("body-parser");
const adRoutes = require("./Advertisement/Advertisement/AdRoute");
// const webpageRoutes = require("./FeedbackManagement/WebPage/WebPageRoute");
const cors = require('cors');
const db = require("./DB/connection");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const { WordTokenizer } = require('natural');
const { removeStopwords } = require('stopword');
const Sentiment = require('sentiment');
const nodemailer = require('nodemailer');
const mongoose = require("mongoose");
 
 
const tokenizer = new WordTokenizer();
const sentiment = new Sentiment();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

// Enable CORS for specific origin and allow necessary headers and methods
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Handle preflight requests for all routes
app.options('*', cors());

// Service Management
app.use("/advertisement", adRoutes);
// app.use("/webpage", webpageRoutes);

const Feedback = mongoose.model("Feedback", {
  name: {
      type: String,
      required: true,
  },
  email: {
      type: String,
      required: true,
  },
  message: {
      type: String,
      required: true,
  },
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 469,
  secure: true,
  debug: true,
  auth: {
   user: 'sabesanganeshalingam@gmail.com',
   pass: 'byxl kxtr bomh agyh ',
  },
 });
   



app.post('/addfeedback', async (req, res) => {
  try {
      const feedback = new Feedback({
          name: req.body.name,
          email: req.body.email,
          message: req.body.message,
      });
      console.log(feedback);
      await feedback.save();
      console.log("Saved");
      res.json({
          success: true,
          name: req.body.name,
      });
  } catch (error) {
      console.error('Error saving feedback:', error);
      res.status(500).json({ success: false, error: 'Failed to save feedback' });
  }
});

app.get('/allfeedbacks', async (req, res) => {
  let feedbacks = await Feedback.find({});
  let feedbacksWithSentiment = [];
  feedbacks.forEach(async (feedback) => {
      let text = feedback.message.toLowerCase();

      const cleanedText = text.replace(/[^\w\s]/g, '');
      const tokenizedText = tokenizer.tokenize(cleanedText);
      const filteredText = removeStopwords(tokenizedText);

      const finalText = filteredText.join(' ');

      const result = sentiment.analyze(finalText);

      let sentimentLabel;
      if (result.score > 0) {
          sentimentLabel = 'positive';
          // Send email if sentiment is positive
          const mailOptions = {
              from: 'sabesanganeshalingam@gmail.com',
              to: feedback.email,
              subject: 'Thank you for your feedback',
              text: 'We appreciate your positive feedback!'
          };

          await transporter.sendMail(mailOptions);
      } else if (result.score <= 0) {
          sentimentLabel = 'negative';
      }
      feedbacksWithSentiment.push({ name: feedback.name, email: feedback.email, message: feedback.message, sentiment: sentimentLabel });
  });

  res.json(feedbacksWithSentiment);
});
app.post('/sendReply', async (req, res) => {
  try {
      const { email, message } = req.body;

      const mailOptions = {
          from: 'sabesanganeshalingam@gmail.com', // your email
          to: email, // recipient's email
          subject: 'Reply to Your Feedback',
          text: message
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Reply sent successfully' });
  } catch (error) {
      console.error('Error sending reply:', error);
      res.status(500).json({ success: false, error: 'Failed to send reply' });
  }
});
app.delete('/deleteFeedback/:id', async (req, res) => {
    try {
      const feedbackId = req.params.id;
      await Feedback.findByIdAndDelete(feedbackId);
      res.status(200).json({ success: true, message: 'Feedback deleted successfully' });
    } catch (error) {
      console.error('Error deleting feedback:', error);
      res.status(500).json({ success: false, error: 'Failed to delete feedback' });
    }
  });


app.listen(PORT, (error) => {
  if (!error) {
      console.log("Server Running on Port" + PORT)
  } else {
      console.log("Error:" + error)
  }
});
