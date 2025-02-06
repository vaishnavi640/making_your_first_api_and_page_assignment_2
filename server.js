const express = require('express');
const app = express();

// Dictionary of HTTP status codes and their descriptions
const statusDescriptions = {
    200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
    201: "Created: The request has been fulfilled and has resulted in a new resource being created.",
    204: "No Content: The server successfully processed the request, but is not returning any content.",
    400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
    401: "Unauthorized: The request requires user authentication.",
    403: "Forbidden: The server understands the request but refuses to authorize it.",
    404: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.",
    405: "Method Not Allowed: The method specified in the request is not allowed for the resource.",
    429: "Too Many Requests: The user has sent too many requests in a given amount of time.",
    500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
    502: "Bad Gateway: The server was acting as a gateway or proxy and received an invalid response from the upstream server.",
    503: "Service Unavailable: The server is currently unable to handle the request due to a temporary overload or maintenance of the server.",
    504: "Gateway Timeout: The server was acting as a gateway or proxy and did not receive a timely response from the upstream server."
};

// GET endpoint to provide status code information
app.get('/status-info', (req, res) => {
    const code = parseInt(req.query.code, 10); // Parse the "code" query parameter as an integer

    if (!code || !statusDescriptions[code]) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request: Please provide a valid status code as the 'code' query parameter."
        });
    }

    // Respond with the status code and its description
    res.json({
        status: code,
        message: statusDescriptions[code]
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
