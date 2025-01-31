# Patient Management System

## 📌 Introduction
This is a **Patient Management System** built using **Next.js**, **TypeScript**, **TailwindCSS**, and **Twilio**. The system allows patients to register, book, and manage their appointments with doctors while providing admins with tools to manage scheduling, confirmations, and cancellations. The application also supports **SMS notifications** for appointment confirmations.

## 🚀 Tech Stack
- **Next.js** – Framework for React applications
- **TypeScript** – Type safety and better developer experience
- **TailwindCSS** – Modern utility-first CSS framework
- **Twilio** – SMS notifications for appointment confirmations
- **Appwrite** – Backend-as-a-service for authentication, database, and file storage
- **ShadCN** – Beautiful and accessible UI components
- **Sentry** – Performance monitoring and error tracking

## 🔥 Features
- ✅ **User Authentication**: Patients can register and log in securely.
- ✅ **Book Appointments**: Patients can schedule appointments with doctors.
- ✅ **Admin Dashboard**: Manage and track all appointments efficiently.
- ✅ **Confirm & Schedule Appointments**: Admins can approve and set appointment times.
- ✅ **Cancel Appointments**: Admins can cancel appointments if necessary.
- ✅ **SMS Notifications**: Patients receive SMS confirmations via **Twilio**.
- ✅ **Fully Responsive**: Works seamlessly across all devices.
- ✅ **File Upload with Appwrite**: Secure file storage for documents.
- ✅ **Performance Monitoring**: Integrated **Sentry** for tracking application performance.

## ⚡ Quick Start
### Prerequisites
Ensure you have the following installed:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- npm or yarn

### Installation
1. **Clone the Repository**
   ```sh
   git clone https://github.com/nikc129/carepulse.git
   cd carepulse
   ```
2. **Install Dependencies**
   ```sh
   npm install
   # or
   yarn install
   ```

### 🔑 Environment Variables
Create a `.env.local` file in the root directory and add:
```env
# APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=
NEXT_PUBLIC_ADMIN_PASSKEY=123456
```
Replace the placeholders with your actual **Appwrite credentials**.

### 🏃 Run the Project
```sh
npm run dev
# or
yarn dev
```
Visit **[http://localhost:3000](http://localhost:3000)** in your browser.

## 🤝 Contribution
Feel free to fork the repo and submit PRs. Suggestions and improvements are welcome!

## 📜 License
This project is licensed under the MIT License.

---
Built with ❤️ using **Next.js, TypeScript & Twilio**