# Password Hash API

A small Node.js and Express API that demonstrates bcrypt password hashing, verification, and hash metadata.

## Features

- Hash passwords with a configurable bcrypt cost factor
- Verify a password against a bcrypt hash
- Inspect the bcrypt version and cost factor in a hash
- Validate request bodies with Zod
- Report health and reject oversized JSON requests

## Requirements

Node.js 20.19+ or 22.12+.

## Setup

~~~bash
git clone https://github.com/a2rp/password-hash-api.git
cd password-hash-api
npm ci
~~~

Copy .env.example to .env and adjust the values if needed:

~~~env
PORT=1198
BCRYPT_SALT_ROUNDS=12
~~~

Start the API:

~~~bash
npm run dev
~~~

## Endpoints

### Health

GET /health

### Hash a password

POST /hash

~~~json
{
  "password": "Hello@123",
  "rounds": 12
}
~~~

The rounds field is optional and must be an integer from 4 to 15. If omitted, the API uses BCRYPT_SALT_ROUNDS or 12. Bcrypt accepts passwords up to 72 UTF-8 bytes; longer values are rejected to avoid silently hashing only a prefix.

### Verify a password

POST /verify

~~~json
{
  "password": "Hello@123",
  "hash": "$2b$12$fPV1jRg.yAlXEmidEkCBbOV5Ye7ET8SuWxPaEoQeCoBsPAhv4wjFe"
}
~~~

Returns {"ok": true} when the password matches. Hashes with a cost factor above 15 are rejected so verification work stays within the API's configured limit.

### Analyze a bcrypt hash

GET /analyze/:hash

For URL paths, encode the $ characters in the hash:

GET /analyze/%242b%2412%24fPV1jRg.yAlXEmidEkCBbOV5Ye7ET8SuWxPaEoQeCoBsPAhv4wjFe

Returns the hash version and cost factor. Invalid bcrypt hashes receive a 400 response.

## Request limits

JSON request bodies are limited to 16 KB. Malformed JSON receives a 400 response and oversized bodies receive a 413 response.

This project is an educational API, not a user-account or authentication service. A public deployment should add access controls and rate limiting because password hashing uses significant CPU time.
