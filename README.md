# 📚 BookVibe

![BookVibe Banner](https://via.placeholder.com/800x200/4F46E5/FFFFFF?text=BookVibe+-+Your+Book+Companion)

A delightful React application for book enthusiasts to discover, track, and organize their reading journey. Browse through a curated collection of books, mark your favorites as read, and maintain a wishlist for future reads.

## ✨ Features

### 🔍 Book Discovery
- Browse a comprehensive collection of books with detailed information
- View book details including author, rating, and description
- Responsive grid layout for optimal viewing on all devices

### 📖 Reading Tracker
- Mark books as read with a single click
- Prevent duplicate entries in read list and wishlist
- Toast notifications for user feedback

### ❤️ Wishlist Management
- Add books to your personal wishlist
- Separate tabs for Read Books and Wishlist
- Easy navigation between different book lists

## 🛠️ Technologies Used

<div align="center">

![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5.5.19-5A0FC8?style=for-the-badge&logo=daisyui&logoColor=white)

![React Router](https://img.shields.io/badge/React_Router-7.14.0-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Tabs](https://img.shields.io/badge/React_Tabs-6.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-5.6.0-000000?style=for-the-badge&logo=react&logoColor=white)
![React Toastify](https://img.shields.io/badge/React_Toastify-11.0.5-000000?style=for-the-badge&logo=react&logoColor=white)

</div>

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/book-vibe.git
   cd book-vibe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
book-vibe/
├── public/
│   └── booksData.json          # Book data source
├── src/
│   ├── components/
│   │   ├── Allbooks/
│   │   │   ├── AllBooks.jsx    # Books grid component
│   │   │   └── Cart.jsx        # Individual book card
│   │   ├── Homepage/
│   │   │   └── Banner.jsx      # Homepage banner
│   │   ├── listed.wish.books/
│   │   │   ├── Listed.jsx      # Read books list
│   │   │   └── wish.jsx        # Wishlist component
│   │   └── shared/
│   │       └── navbar/
│   │           └── Navbar.jsx  # Navigation component
│   ├── context/
│   │   └── BookContext.jsx     # Global state management
│   ├── Layout/
│   │   └── MainLayout.jsx      # Main app layout
│   ├── pages/
│   │   ├── bookDetails/
│   │   │   └── BookDetails.jsx # Individual book details
│   │   ├── books/
│   │   │   └── Books.jsx       # Books page with tabs
│   │   ├── ErrorPage/
│   │   │   └── ErrorPage.jsx   # Error handling
│   │   └── homepage/
│   │       └── HomePage.jsx    # Homepage
│   ├── routes/
│   │   ├── localDB.js          # Local storage utilities
│   │   └── Routes.jsx          # App routing
│   └── utility/                # Utility functions
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Usage

1. **Browse Books**: Visit the homepage to see all available books
2. **View Details**: Click on any book to see detailed information
3. **Mark as Read**: Use the "Mark as Read" button to add books to your read list
4. **Add to Wishlist**: Click "Add to Wishlist" for books you want to read later
5. **Manage Lists**: Navigate to the "Books" page to view your read books and wishlist in organized tabs

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Book data provided by local JSON file
- UI components powered by DaisyUI
- Icons from React Icons
- Toast notifications via React Toastify

---

<div align="center">

**Made with ❤️ for book lovers**

⭐ Star this repo if you found it helpful!

</div>
