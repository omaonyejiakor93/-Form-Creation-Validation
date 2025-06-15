// Define the API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Fetch data from the API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    displayData(data); // Call the display function
  })
  .catch(error => {
    console.error('Error fetching data:', error); // Handle errors
  });

// Display the fetched data in the HTML
function displayData(data) {
  const container = document.getElementById('data-container'); // Target the container div

  data.slice(0, 5).forEach(item => { // Only show first 5 posts
    const div = document.createElement('div');
    div.innerHTML = <h3>${item.title}</h3><p>${item.body}</p>;
    container.appendChild(div);
  });
}