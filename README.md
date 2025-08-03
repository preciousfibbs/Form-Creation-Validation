# 🧾 Form Creation and Validation

This repository contains two key projects focused on practical JavaScript skills:

1. ✅ User Registration Form with Validation  
2. 🌐 Fetching and Displaying User Data from an API  

These projects demonstrate DOM manipulation, form validation, asynchronous data fetching, error handling, and user feedback.

---

## 📍 Project 1: User Registration Form with Validation

### 🔧 Description

A user-friendly registration form built using HTML, CSS, and JavaScript. It validates the username, email, and password fields before allowing submission.

### 💡 Features

- Client-side validation on submission
- Real-time feedback for invalid entries
- Responsive and styled form layout

### 🧠 Validation Rules

- **Username** must be at least 3 characters
- **Email** must contain `@` and `.`
- **Password** must be at least 8 characters

### 🗂️ Files

- `index.html` – Structure of the form  
- `style.css` – Styling of the form  
- `script.js` – Validation logic

### 🧱 How It Works

1. Form is only submitted after passing all validations.
2. Displays either:
   - ✅ `"Registration successful!"` (in green), or  
   - ❌ Error messages per failed field (in red).

---

## 🌍 Project 2: Fetching and Displaying User Data from an API

### 🔧 Description

An interactive JavaScript-based app that fetches user names from a public API and displays them in a list format. If the API call fails, it falls back to a local list.

### 🔗 Public API Used
[`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users)

### 💡 Features

- Fetches data asynchronously using `fetch` and `async/await`
- Displays user names in an unordered list
- Handles network errors gracefully
- Provides fallback data if the API fails

### 🧱 How It Works

1. When the page loads (`DOMContentLoaded`), `fetchUserData()` is called.
2. On success:  
   - Displays the names from the API.  
3. On error:
   - Shows `"Failed to load user data."`  
   - Then falls back to displaying names from a local JavaScript array.

### 🗂️ Files

- `fetch-data.html` – HTML structure for display  
- `fetch-data.css` – UI styling for user list  
- `fetch-data.js` – API fetching and fallback logic

---

## 🗃️ Project Structure

Form-Creation-Validation/
│
├── index.html # User Registration Form
├── style.css # Form styling
├── script.js # Form validation logic
│
├── fetch-data.html # API User List Page
├── fetch-data.css # Styling for API data display
├── fetch-data.js # Fetch logic and error handling

yaml
Copy
Edit

---

## 🧠 Learning Objectives

- Master JavaScript form validation and feedback
- Practice DOM selection and manipulation
- Work with asynchronous JavaScript (fetch, async/await)
- Implement graceful error handling
- Enhance UX using fallback logic and dynamic UI updates

---

## 🚀 Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/Form-Creation-Validation.git
   cd Form-Creation-Validation
Open the files in VS Code or any editor.

Use Live Server or your browser to preview:

index.html for the form

fetch-data.html for the user list

👨‍💻 Author
Built as part of the ALX Software Engineering Program — hands-on experience with JavaScript fundamentals and real-world problem-solving.

yaml
Copy
Edit
