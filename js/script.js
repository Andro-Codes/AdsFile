// Get the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const param = urlParams.get('param');

// Define static JSON responses
const response1 = {
    "status": "success",
    "data": {
        "message": "This is the first response for param1"
    }
};

const response2 = {
    "status": "success",
    "data": {
        "message": "This is the second response for param2"
    }
};

// Function to display the correct response based on the parameter
function displayResponse() {
    let jsonResponse;
    
    if (param === 'param1') {
        jsonResponse = response1;
    } else if (param === 'param2') {
        jsonResponse = response2;
    } else {
        jsonResponse = { "status": "error", "message": "Invalid parameter" };
    }
    
    // Display the JSON response on the page
    document.getElementById('response').textContent = JSON.stringify(jsonResponse, null, 4);
}

// Call the function to display the response
displayResponse();