# web_project

**Student Name**: Gurpreet Kaur  
**Student Number**: 8966925  
**Date**: 19-July-2024  

## Technology Stack

- **Frontend**: ReactJS
- **Backend**: Node.js with Express
- **Database**: MongoDB (Atlas)

## Project Setup
#### 1. Initialize your project. (/2)
- Repository created on [GitHub](https://github.com/preet0511/web_project) and cloned to local machine.
- Initialized a new project using `npm init` for both frontend and backend.
#### Backend Initialization
1. **Create Backend Directory and Initialize Project**
    mkdir backend
    cd backend
    npm init -y
    npm install express mongoose

2. **Create Basic Express Server**
    - Create a file `server.js` in `backend` directory:

## Repository Link
- https://github.com/preet0511/web_project

#### Frontend Initialization
1. **Create Frontend Directory and Initialize Project**
    cd ..
    npx create-react-app frontend

2. **Install React Router**
    cd frontend
    npm install react-router-dom axios

### 2. Configure Your Database

#### Define MongoDB Schemas

**Create a `models` Directory in `backend` Directory.**

1. **Create `Product.js` File in `models` Directory:**

2. **Create `Category.js` File in `models` Directory:**

#### Create Routes and Controllers

**Create a `routes` Directory in the `backend` Directory.**

1. **Create `productRoutes.js` File in `routes` Directory:**

2. **Create `categoryRoutes.js` File in `routes` Directory:**

3. **Update `server.js` to Include Routes:**

### 3. Product Listings

#### Display Products on the Frontend

**Create Basic Components**

1. **Create `components` Directory in `frontend/src`.**

2. **Create `ProductList.js` File in `components` Directory:**

3. **Create `CategoryList.js` File in `components` Directory:**

4. **Create `ProductDetail.js` File in `components` Directory:**

#### Set Up Routing

**Update `App.js` to Include Routing:**
### Products Schema (MongoDB)
- name: String
- description: String
- price: Number
- category: String
- stock: Number
- imageUrl: String

### Users Schema (MongoDB)
- username: String
- password: String
- email: String
### Visual Representation of Schemas
- https://github.com/preet0511/web_project/blob/main/schema_diagram.png
## Repository Link
- https://github.com/preet0511/web_project