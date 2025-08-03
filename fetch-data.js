document.addEventListener("DOMContentLoaded", () => {
  const fallbackUserNames = [
    "Ngozi Ibeh",
    "Blessing Okon",
    "Micheal Udoh",
    "Morris Sam",
    "Favour Dill",
    "Blessed Umoh"
  ];

  const dataContainer = document.getElementById("api-data");

  async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    try {
      const response = await fetch(apiUrl);
      const users = await response.json();

      // Clear loading message and fallback notice if any
      dataContainer.innerHTML = "";

      const userList = document.createElement("ul");

      users.forEach(user => {
        const listItem = document.createElement("li");
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });

      dataContainer.appendChild(userList);
    } catch (error) {
      console.error("API fetch failed. Falling back to local data.");

      dataContainer.innerHTML = "";

      const userList = document.createElement("ul");

      fallbackUserNames.forEach(name => {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        userList.appendChild(listItem);
      });

      dataContainer.appendChild(userList);

      // Optional: Show fallback notice
      const notice = document.createElement("p");
      notice.id = "fallback-notice";
      notice.textContent = "Offline mode: Showing local user data.";
      dataContainer.appendChild(notice);
    }
  }

  fetchUserData();
});
