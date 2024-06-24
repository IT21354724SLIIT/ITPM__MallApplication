const express = require('express');
const cors = require('cors'); // Add CORS middleware if needed

const app = express();
const port = process.env.PORT || 5000;

// Database or in-memory data structure to store login timestamps (modify as needed)
let loginTimestamps = [];

app.use(cors()); // Enable CORS if necessary

app.post('/api/track-login', async (req, res) => {
  try {
    loginTimestamps.push(new Date()); // Record the login timestamp
    const loginCount = loginTimestamps.length; // Calculate total logins

    res.json({ loginCount });
  } catch (error) {
    console.error('Error tracking login:', error);
    res.status(500).send('Internal server error');
  }
});

// Add endpoint for generating reports (details below)

app.listen(port, () => console.log(`Server running on port ${port}`));
