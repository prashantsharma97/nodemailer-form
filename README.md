# Portfolio Contact Form - Email Notification API

This is a simple contact form application with an integrated email notification system built using Node.js, Nodemailer, and React.js. When a user submits a message on the contact form, an email is sent to the provided email address with the user's message.

## Features

- **Contact Form:** Allows users to submit their name, email, and message.
- **Email Notification:** Sends an email to a specified email address when the form is submitted.
- **Responsive Design:** The contact form is built to be responsive and works well on both desktop and mobile devices.
- **Easy Setup:** The application is easy to set up and use for development and production.

## Technologies Used

- **Frontend:**
  - React.js
  - Tailwind CSS (for styling)

- **Backend:**
  - Node.js
  - Nodemailer (for sending emails)

- **Email Service:**
  - You can use Gmail or any other SMTP service for sending emails.

## Getting Started

Follow these steps to get the project up and running on your local machine:

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A code editor like [VS Code](https://code.visualstudio.com/) (optional but recommended).
- [Nodemailer](https://www.npmjs.com/package/nodemailer) and other dependencies are included in the backend setup.

### Backend Setup (Node.js + Nodemailer)

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/portfolio-contact-form.git
   cd portfolio-contact-form
Install dependencies:

bash
Copy
npm install
Create a .env file to store sensitive information like email credentials:

bash
Copy
touch .env
Inside .env, add the following variables:

plaintext
Copy
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
Start the server:

bash
Copy
npm start
Your server should be running on http://localhost:5000.

Frontend Setup (React.js)
Navigate to the frontend directory:

bash
Copy
cd client
Install frontend dependencies:

bash
Copy
npm install
Start the frontend development server:

bash
Copy
npm start
The frontend should be available at http://localhost:3000.

Email Configuration
If you're using Gmail:

Enable Less Secure Apps: For Gmail, you need to enable "less secure apps" or use App-Specific Passwords.

App-Specific Password: If you have Two-Factor Authentication enabled on Gmail, you'll need to generate an App-Specific Password to use in the .env file.

Project Structure
bash
Copy
portfolio-contact-form/
├── client/                # React.js frontend
│   ├── public/            # Public assets
│   ├── src/               # React components and styles
│   └── package.json       # React dependencies
├── server/                # Node.js backend (API for sending email)
│   ├── emailTemplate/     # HTML email template
│   ├── server.js          # Main server file with API routes
│   └── .env               # Environment variables (email credentials)
└── README.md              # Project documentation
How It Works
The user visits the contact page on the frontend (client/).

They fill in their name, email, and message.

When the user submits the form, the frontend sends a POST request to the backend (server/).

The backend receives the form data, processes it, and uses Nodemailer to send an email with the user's message to the configured email address.

Troubleshooting
Email not sending: Make sure your email credentials in the .env file are correct. If using Gmail, enable "less secure apps" or generate an app-specific password.

Form submission issues: Check the network tab in the browser's developer tools for any errors in the request/response.

Contributing
Feel free to fork this repository and contribute to the project. If you find a bug or have a feature request, please open an issue.

License
This project is licensed under the MIT License - see the LICENSE file for details.

markdown
Copy

---

### Key Sections:

1. **Introduction**: A brief description of the project.
2. **Features**: What the project does.
3. **Technologies Used**: A list of technologies used.
4. **Getting Started**: Instructions on setting up and running the project.
5. **Project Structure**: Explanation of the project directory structure.
6. **How It Works**: High-level overview of how the app works.
7. **Troubleshooting**: Common issues and their solutions.
8. **Contributing**: How others can contribute to the project.
9. **License**: Licensing information (if you plan to open-source it).

This `README.md` is structured to provide clear instructions for anyone setting up or contributing to the project. You can customize it further based on your needs!


