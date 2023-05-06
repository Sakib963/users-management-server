/**
 * 1. Create a POST API on server side
 * 2. Client side, send data via POST
 * 3. set fetch method inside the fetch options (second parameter) 
 * 4. Option will have three things : method: "POST",
 * 5. Option will have header: "content-type": "application/json",
 * 6. Option will have body: JSON.stringify(YOUR_CONTENT)
 * 7. On the server side, Don't forget to use express.json() middleware
 *  */