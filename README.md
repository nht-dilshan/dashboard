# EDU Dashboard

A simple educational dashboard application built using React, Firebase, and React Router. This application allows users to sign up, log in, and access different components of an educational dashboard.

## Features

- User authentication with Firebase
- Responsive sidebar navigation
- Various dashboard components including Assignment, Report, Stats, Tasks, and Help
- User-friendly signup and login forms

## Technologies Used

- React
- React Router
- Firebase Authentication
- CSS for styling

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (LTS version recommended)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/edu-dashboard.git
   cd edu-dashboard

### Folder Structure

edu-dashboard/
│
├── src/
│   ├── components/         # All React components
│   │   ├── Login.jsx      # Login component
│   │   ├── Signup.jsx     # Signup component
│   │   ├── Sidebar.jsx     # Sidebar component
│   │   ├── Content.jsx     # Main content area
│   │   ├── Profile.jsx     # User profile component
│   │   ├── Assignment.jsx   # Assignment component
│   │   ├── Report.jsx      # Report component
│   │   ├── Stats.jsx       # Stats component
│   │   ├── Tasks.jsx       # Tasks component
│   │   └── Help.jsx        # Help component
│   ├── styles/             # CSS files
│   │   ├── login.css       # Styles for login page
│   │   ├── signup.css      # Styles for signup page
│   │   └── sidebar.css      # Styles for sidebar
│   ├── App.js              # Main application component
│   ├── firebaseConfig.js    # Firebase configuration
│   └── index.js            # Entry point of the application
│
├── package.json             # Project dependencies
└── README.md                # Project documentation
