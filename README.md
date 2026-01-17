# GreenGadgets Hub

**GreenGadgets Hub** is a full-stack eco-friendly e-commerce platform where users can explore and purchase sustainable products while tracking their environmental impact, such as CO₂ savings and plastic reduction.

The platform promotes conscious consumption by showcasing verified green products with transparent environmental benefits.

---

## Client Side Live Link : https://green-gadgets-hub.vercel.app
## Server Side Live Link : https://green-gadgets-server.onrender.com

##  Live Features Overview

- Eco-friendly product marketplace
- Real-time environmental impact statistics
- Secure product creation for authenticated users
- Clean, modern UI with responsive design
- Toast notifications for better user feedback

---

##  Tech Stack

### Frontend
- **Next.js** (App Router)
- **React**
- **Tailwind CSS**
- **React Icons**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB**

---

##  Setup & Installation

### 1️ Clone the Repository
```bash
git clone https://github.com/your-username/greengadgets-hub.git
cd greengadgets-hub
```

### 2️ Install Dependencies

#### For Frontend:
```bash
npm install
```

#### For Backend (if separate):
```bash
cd backend
npm install
```

### 3️ Environment Variables

Create a `.env.local` file in the root directory:

```env
# Frontend Environment Variables
NEXT_PUBLIC_API_URL=http://localhost:5000

# Backend Environment Variables (in backend folder)
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

### 4 Run the Development Server

#### Start Backend Server:
```bash
cd backend
npm start

npm run dev
```

Backend will run on: `http://localhost:5000`

#### Start Frontend Server:
```bash
npm run dev
```

Frontend will run on: `http://localhost:3000`

---

##  Route Summary

| Route | Description |
|-------|-------------|
| `/` | Home page with hero section & impact stats |
| `/items` | Product listing page |
| `/items/[id]` | Single product details |
| `/add-item` | Add new product (protected route) |
| `/login` | User authentication |
| `/dashboard` | User/Seller dashboard |

---

##  Implemented Features

###  Product Management
- Add new eco-friendly products
- Input product name, description, price, image & CO₂ savings
- Protected route using cookie-based authentication
- Edit and delete products (admin)

###  Toast Notification System
- Displays success message after product creation
- Auto-hides after 3 seconds
- Shows error messages on failure
- Non-intrusive and user-friendly

###  Environmental Impact Tracking
-  Live CO₂ saved counter
-  Plastic avoided statistics
-  Trees equivalent visualization
- Real-time aggregated impact metrics

### UI & UX Enhancements
- Fully responsive layout for all devices
- Animated sections and smooth hover effects
- Modern gradient-based design system
- Clean card-based UI components
- Optimized loading states

---

##  Toast Notification Feature

When a product is successfully created:
-  A success toast appears with confirmation
-  Form resets automatically
-  User is redirected to the products page
-  Mobile-friendly notification design

This improves user experience and provides clear, immediate feedback for all actions.

---

##  Feature Explanation

###  Eco Verification
All products are verified and showcased as eco-friendly alternatives to conventional items.

###  Impact Transparency
Users can see exactly how much CO₂ and plastic waste they save with each purchase, promoting informed decision-making.

###  Protected Actions
Only authenticated users can add, edit, or delete products, ensuring data integrity and platform security.

###  Community Focused
The platform encourages sustainable lifestyle choices and builds a community around conscious consumption.

---

##  Future Improvements

- [ ] Full user authentication with JWT tokens
- [ ] Shopping cart & checkout system
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Advanced admin dashboard with analytics
- [ ] Dark / Light mode toggle
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Email notifications
- [ ] Advanced filtering and search
- [ ] Multi-language support
- [ ] Mobile app version

---

##  Project Structure

```
greengadgets-hub/
│
├── app/                    # Next.js app directory
│   ├── page.js            # Home page
│   ├── items/             # Product pages
│   ├── add-item/          # Add product page
│   ├── login/             # Authentication
│   └── dashboard/         # User dashboard
│
├── components/            # Reusable React components
│   ├── Navbar.js
│   ├── ProductCard.js
│   ├── Toast.js
│   └── ...
│
├── public/               # Static assets
│   └── images/
│
├── styles/              # Global styles
│   └── globals.css
│
├── backend/             # Backend server
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── controllers/     # Route controllers
│   └── server.js        # Express server
│
├── .env.local          # Environment variables
├── package.json        # Dependencies
└── README.md           # This file
```

---

## 👤 Author

**Kabir Hossain**

📍 Feni, Bangladesh  
📧 Email: nerob2308@gmail.com 

---

##  Show Your Support

If you like this project, please consider giving it a ⭐ on GitHub!

---
