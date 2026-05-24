# Notes API (TypeScript)

A Notes REST API built with:

- TypeScript
- Express
- MongoDB Atlas
- Mongoose

## Features

- Create Note
- Get All Notes
- Get Note By ID
- Update Note
- Delete Note

## Installation

```bash
npm install
```

Create `.env` file:

```env
MONGODB_URI=your_connection_string
```

Run project:

```bash
npm run dev
```

## Endpoints

### Create Note

POST /notes

### Get All Notes

GET /notes

### Get Note By ID

GET /notes/:id

### Update Note

PUT /notes/:id

### Delete Note

DELETE /notes/:id

Authentication, Hashing and Error handling are in development 
