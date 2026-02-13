# Password Hash API

A minimal backend API demonstrating secure password hashing and verification using bcrypt.

This project focuses on one concept only:
password hashing lifecycle with configurable salt rounds.

---

## Tech Stack

- Node.js
- Express
- bcrypt
- zod (validation)

---

## Features

- Hash password with configurable salt rounds
- Verify password against bcrypt hash
- Analyze bcrypt hash (extract version and cost factor)
- Input validation using zod
- Clean layered project structure
- REST Client test file support

---

## Installation

```bash
git clone <your-repo-url>
cd password-hash-api
npm install
```

---

## Create .env file:

PORT=1198
BCRYPT_SALT_ROUNDS=12

---

## Run server:

```bash
npm run dev
```

---

## API Endpoints

---

## Health Check

GET /health

---

## Hash Password

POST /hash

## Body:

{
"password": "Hello@123",
"rounds": 12
}

## Response:

{
"hash": "$2b$12$...",
"roundsUsed": 12
}

---

## Verify Password

POST /verify

## Body:

{
"password": "Hello@123",
"hash": "$2b$12$..."
}

## Response:

{
"ok": true
}

---

## Analyze Hash

GET /analyze/:hash

## Response:

{
"version": "2b",
"rounds": 12
}

---

## What This Project Demonstrates

- How bcrypt embeds salt inside hash
- Cost factor awareness
- Safe salt round boundaries
- Clean separation of routes, controllers, utils
- Backend micro-service design pattern

---

### Notes

- This is a single-purpose backend micro project.
- It intentionally avoids authentication systems,
  databases, or complex architecture to keep focus
  on password hashing mechanics.
