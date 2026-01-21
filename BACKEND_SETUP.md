# Fightpur - Full Stack Setup Guide

This is a complete study materials and placement guidance platform with both frontend and backend.

## Project Structure

```
project fightpur/
├── index.html              # Frontend home page
├── notes.html              # Notes page
├── jobs.html               # Jobs page
├── pyq.html                # PYQ page
├── placement.html          # Placement page
├── style.css               # Frontend styles
├── script.js               # Frontend scripts
├── server/                 # Backend API
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── utils/
└── README.md               # This file
```

## Quick Start

### 1. Backend Setup

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

The backend will run on `http://localhost:5000`

### 2. Frontend Setup

The frontend files are ready to use. Just open `index.html` in a browser or use a local server:

```bash
# Using Python
python -m http.server 3000

# Using Node.js (npm)
npx http-server -p 3000

# Using VS Code Live Server extension
```

The frontend will run on `http://localhost:3000`

## Database Setup

### Option 1: Local MongoDB
```bash
# Install MongoDB
# https://docs.mongodb.com/manual/installation/

# Run MongoDB
mongod
```

### Option 2: MongoDB Atlas (Cloud)
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in `server/.env`

## API Documentation

See `server/README.md` for complete API documentation.

### Key API Endpoints

**Notes**
- `GET /api/notes` - Get all notes
- `POST /api/notes` - Create note

**Jobs**
- `GET /api/jobs` - Get all jobs
- `POST /api/jobs` - Create job

**PYQ**
- `GET /api/pyq` - Get all PYQs
- `POST /api/pyq` - Create PYQ

**Placement**
- `GET /api/placement` - Get materials
- `POST /api/placement` - Create material

**Users**
- `POST /api/users/register` - Register
- `POST /api/users/login` - Login
- `GET /api/users/:id/profile` - Get profile

## Frontend Integration

To connect frontend with backend, update API URLs in `script.js`:

```javascript
// Current (local)
const API_URL = 'http://localhost:5000/api';
```

Example fetch call:
```javascript
fetch('http://localhost:5000/api/notes')
  .then(res => res.json())
  .then(data => console.log(data))
```

## Features

### Frontend
- Responsive design
- Navigation with dropdowns
- Search functionality
- Job listings
- Notes showcase
- PYQ listings
- Placement materials
- Newsletter subscription

### Backend
- Complete REST API
- User authentication (JWT)
- CRUD operations for all resources
- MongoDB integration
- Error handling
- Request validation
- Pagination
- Search and filtering

## Development

### Frontend Development
- Edit `index.html`, `notes.html`, `jobs.html`, `pyq.html`, `placement.html`
- Update styles in `style.css`
- Update scripts in `script.js`
- No build process required

### Backend Development
- Edit controllers in `server/controllers/`
- Edit models in `server/models/`
- Edit routes in `server/routes/`
- API auto-reloads with nodemon

## Testing

### Test Backend API
```bash
# Using curl
curl http://localhost:5000/api/health

curl http://localhost:5000/api/notes

# Using Postman
# Import API endpoints and test
```

### Test Frontend
- Open `index.html` in browser
- Check console for errors
- Verify API calls work

## Deployment

### Frontend Deployment
- Deploy to GitHub Pages, Vercel, Netlify
- Update API URLs to production backend

### Backend Deployment
- Deploy to Heroku, Railway, Render, AWS
- Update environment variables
- Update MongoDB connection string

## Troubleshooting

### Backend Issues
```bash
# Check if MongoDB is running
mongo

# Check node version
node --version

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Frontend Issues
- Check browser console for errors
- Verify API URLs are correct
- Check CORS settings in backend

### Database Issues
- Verify MongoDB connection string
- Check database exists
- Check user credentials

## Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/fightpur
JWT_SECRET=your-secret-key
FRONTEND_URL=http://localhost:3000
```

## Additional Resources

- [Express Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [JWT Guide](https://jwt.io/)
- [REST API Best Practices](https://restfulapi.net/)

## Next Steps

1. Set up database with sample data
2. Connect frontend to backend APIs
3. Implement user authentication UI
4. Add file upload functionality
5. Deploy to production
6. Set up CI/CD pipeline
7. Add testing suite
8. Implement caching

## Support

For issues and questions, refer to:
- Backend README: `server/README.md`
- Frontend code comments
- API documentation

## License

MIT License

## Author

Fightpur Team

---

**Happy Coding!** 🚀
