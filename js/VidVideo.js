const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Route to handle requests and send a JSON response
app.post('/api/data', (req, res) => {
    const { param } = req.body;

    // Process the parameter and create a response
    if (param) {
        res.json({
            success: true,
            message: `You passed: ${param}`
        });
    } else {
        res.json({
            success: false,
            message: 'No parameter passed!'
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});