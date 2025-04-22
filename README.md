# Tracker API

## Overview

The Tracker API allows users to sign up, log in with JWT authentication, create workout plans, and track their progress by submitting workout records.
And this is a solution for: https://roadmap.sh/projects/fitness-workout-tracker

## Features

- **User Authentication**: Signup & login with JWT.
- **Manage Workout Plans**: Create, view, and manage workout plans.
- **Track Workouts**: Submit workout records with sets, reps, and comments.
- **Progress Reports**: View past workouts and progress.

## Tech Stack

- **Backend**: NestJS
- **Database**: TypeORM (PostgreSQL)
- **Authentication**: JWT

---

## Installation

1. **Clone the repo:**

   ```bash
   git clone https://github.com/yeecai/tracker-api.git
   cd tracker-api
   ```
2. **Install dependencies:**

    ```yarn install```

3. **Configure your database in .env:**

    ```
    DB_HOST=localhost
    DB_PORT=5432
    DB_USERNAME=your_db_username
    DB_PASSWORD=your_db_password
    DB_NAME=tracker_api
    ```
4. **Start the server:**

   ``` yarn dev```

## License
MIT License