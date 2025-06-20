
# Student Management System

A full-stack web application built with **Spring Boot**, **React**, and **Microsoft SQL Server** to manage student records efficiently.

## 🧰 Tech Stack

- **Frontend**: React.js, Axios, React Router
- **Backend**: Spring Boot (Java), Spring Data JPA
- **Database**: Microsoft SQL Server
- **Tools**: VS Code, IntelliJ IDEA, Git, GitHub

---

## ⚙️ Features

- Create, Read, Update, and Delete (CRUD) operations on student data
- RESTful API backend
- React frontend with modern UI and routing
- Microsoft SQL Server integration with JPA
- CORS-enabled API access

---

## 🗂️ Project Structure

```
StudentMS/
├── student-management-backend/
│   ├── src/
│   └── pom.xml
├── student-management-frontend/
│   ├── src/
│   └── package.json
```

---

## 🖥️ Backend Setup (Spring Boot)

### Prerequisites
- Java 17 or higher
- Maven
- Microsoft SQL Server installed and running

### Steps
1. Navigate to `student-management-backend`
2. Update `application.properties` with your DB config:
   ```properties
   spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=StudentDB
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   spring.web.cors.allowed-origins=http://localhost:3000
   ```
3. Run the backend:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

---

## 🌐 Frontend Setup (React)

### Prerequisites
- Node.js and npm

### Steps
1. Navigate to `student-management-frontend`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```
4. The app will be available at `http://localhost:3000`

---

## 📦 API Endpoints

| Method | Endpoint               | Description          |
|--------|------------------------|----------------------|
| GET    | /api/students          | Get all students     |
| POST   | /api/students          | Add a student        |
| GET    | /api/students/{id}     | Get student by ID    |
| PUT    | /api/students/{id}     | Update student       |
| DELETE | /api/students/{id}     | Delete student       |

---




## 📚 Future Enhancements

- Pagination and search
- User authentication
- Role-based access
- UI/UX improvements

---

## 🙋‍♂️ Author

- [Surender Mahawar](https://github.com/surender-9899)

---

## 📄 License

This project is licensed under the MIT License.
