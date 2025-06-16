// 1. Define Async Function
async function fetchUserData() {
    // 2. API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 3. Select display element
    const dataContainer = document.getElementById('api-data');

    try {
        // 4. Fetch data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // 5. Clear existing content
        dataContainer.innerHTML = '';

        // 6. Create list and populate
        const userList = document.createElement('ul');
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        dataContainer.appendChild(userList);
    } catch (error) {
        // 7. Handle errors
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Fetch error:', error);
    }
}

// 8. Run on page load
document.addEventListener('DOMContentLoaded', fetchUserData);