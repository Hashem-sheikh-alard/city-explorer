# City Explorer

A full-stack web application for discovering city attractions. Users browse attractions, read and leave reviews and ratings, and save places to a personal favorites list. Logged-in users get a personalized dashboard, while some features are restricted for guests.

> University project. Team of 3 — I served as Team Lead, built the complete backend, and delivered the majority of the front end. Final mark: 20/20.

---

## Demo


![Search page]<img width="1920" height="1140" alt="Screenshot 2026-06-25 005400" src="https://github.com/user-attachments/assets/02371a10-7597-4673-88fe-0a4ae1f6536d" />

*The attractions page with the live search filter and results counter.*

![Dashboard]<img width="1920" height="1140" alt="Screenshot 2026-06-25 005311" src="https://github.com/user-attachments/assets/d9bf3551-4d85-4bb7-9e47-6d6a248f47eb" />

*A logged-in user's dashboard showing their saved favorites.*

---

## Tech Stack

- **Backend:** PHP
- **Database:** MySQL (phpMyAdmin)
- **Frontend:** HTML, CSS, JavaScript, React
- **Auth:** PHP sessions

---

## Key Features

- **User accounts** — registration, login/logout, and session-based authentication.
- **Route authorization** — certain pages and actions are restricted to logged-in users.
- **Reviews & ratings** — users leave reviews and ratings tied to their account and to specific attractions.
- **Favorites** — users save attractions to a personal list, shown on their dashboard.
- **Live search** — a real-time filter narrows attractions as the user types, with a live counter of available results.

---

## How It Works

The app is built around a PHP/MySQL backend that handles authentication and data, with a JavaScript/React front end for the interactive pages.

- **Authentication & sessions** — PHP sessions track logged-in users and gate access to protected pages and actions (e.g. leaving a review or saving a favorite).
- **Data model** — attractions, users, and their reviews/favorites are stored relationally in MySQL, with CRUD operations exposed through the backend.
- **Live search** — the attractions list filters in real time on the client as the user types, updating a counter of matching results.

---

## Repository Structure

```
/backend         PHP backend and API logic
/frontend        HTML / CSS / JS / React pages
/database        SQL schema / export / phpmyadmin
/docs            Screenshots
```


---

## Setup

1. Import the SQL file in `/database` into MySQL via phpMyAdmin.
2. Place the project files on a local server (e.g. XAMPP `htdocs`).
3. Update the database connection settings (host, user, password, database name) in the backend config to match your environment.
4. Open the app in your browser via your local server URL.

---

## My Role

- Designed and built the complete PHP/MySQL backend: session auth, route authorization, and CRUD for reviews, ratings, and favorites.
- Implemented the real-time search filter and live results counter.
- Built 2.5 of the 5 front-end pages, including the page graded highest for design.
- Mentored two teammates with no backend experience, walking them through the logic until they could contribute.

---

## Author

**Hashem Sheikh Alard** — Software Engineering student, PSUT.
[LinkedIn](https://www.linkedin.com/in/hashem-sheikh-alard)
