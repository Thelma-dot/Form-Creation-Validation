async function fetchUserData() {
      // Define API URL
      const apiUrl = 'https://jsonplaceholder.typicode.com/users';
      
      // Select the data container element
      const dataContainer = document.getElementById('api-data');

      try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Convert response to JSON
        const users = await response.json();
        
        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create and append user list
        const userList = document.createElement('ul');
        users.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = user.name;
          userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);
      } catch (error) {
        // Handle errors during fetch
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
      }
    }

    // Invoke fetchUserData on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', fetchUserData);
