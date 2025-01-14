# 📚 Ketakht (کتاخت)
### A Platform for Book Exchange to Promote Reading Culture 📖🌱

---

## 🌟 Project Description
**Ketakht** (کتاخت) is a platform that encourages people to exchange books. It aims to:
- Promote a culture of reading.
- Make books more accessible and affordable.
- Build a flexible community of readers.
- Support environmental sustainability by reducing paper waste.

This project creates a collaborative space for book lovers to share knowledge and reduce the cost of reading while promoting eco-friendly practices.

---

## 🚀 Features
- 📚 **Public Library**: A shared library where users can list books for exchange.
- 📔 **Personal Library**: Manage your own collection of books.
- 🔄 **Exchange Page**: Facilitate book exchanges between users.
- 🔐 **Login Page**: Secure user authentication.

### Upcoming Features
- 📊 **User Dashboard**: Personalized insights for users.
- 📱 **Mobile-Friendly Design**: Fully responsive layout for all devices.

---

## 🛠️ Technology Stack
This repository covers the **Frontend** of the project using:
- **Next.js (v15.1.3)**: A React-based framework for building modern web applications.
- **PrimeReact (v10.9.1)**: A rich UI component library.
- **PrimeIcons & PrimeFlex**: For icons and responsive layouts.
- **Tailwind CSS**: Utility-first CSS framework for efficient styling.

The **Backend** will be developed using **Django REST Framework**, which is not part of this repository.

---

## 📦 Installation Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MirMSadeghi/ketabex-front.git
   cd ketabex-front
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

---

## 📋 License
The project is currently private. For future public releases, consider the following license options:
- **MIT License**: A permissive license that allows reuse with minimal restrictions.
You can add a license badge to your repository once the license type is selected.

---

## 📸 Screenshots
Screenshots will be added in future updates to showcase the features and UI of the application. These will be uploaded once the core functionality is completed.

---

## 🛠️ Package.json Details
```json
{
  "name": "ketakht",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "axios": "^1.7.9",
    "next": "15.1.3",
    "primeflex": "^3.3.1",
    "primeicons": "^7.0.0",
    "primereact": "^10.9.1",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17"
  }
}
```

