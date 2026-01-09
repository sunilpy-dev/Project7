
# Password Manager

A modern, lightweight password manager built with React, Vite and Tailwind CSS. It stores credentials locally using the browser's LocalStorage, and offers features like password show/hide, copy-to-clipboard, edit, delete and search for quick credential management.

![Project screenshot](https://github.com/user-attachments/assets/944169b7-a0a6-4fa2-a653-989722085190)
![Project screenshot](<Screenshot 2025-01-24 183332.png>)

## Live Preview
- Run locally with `npm run dev` (see Installation) and open the address shown by Vite.

## Features
- Add and save credentials (site name, username, password, URL).
- Password show / hide toggle.
- Copy username or password to clipboard.
- Edit and delete saved entries.
- Persistent storage via `localStorage` (no backend required).
- Simple, responsive UI built with Tailwind CSS.

## Tech Stack
- **Framework:** React (JSX)
- **Build tool:** Vite
- **Styling:** Tailwind CSS, PostCSS
- **Language:** JavaScript (ES6+)
- **Storage:** Browser LocalStorage
- **Bundler / Dev:** Node.js, npm

## Installation
1. Clone the repository:

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd Password-mnagaer
```

2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

4. Open the app in your browser at the URL printed by Vite (usually http://localhost:5173).

## Usage
- Click **Add** to create a new credential entry.
- Use the eye icon to show or hide passwords.
- Click the copy icon to copy username or password to clipboard.
- Use the edit action to update an entry, or delete to remove it.
- Data is stored locally in your browser via `localStorage`.

## Project Structure

- `index.html` — App entry.
- `src/main.jsx` — App bootstrap.
- `src/App.jsx` — Root component.
- `src/components/` — UI components (Navbar, Manager, Footer, etc.).
- `src/assets/` — Images and static assets.

## Customization
- Swap or add images inside `public/` or `src/assets/` and update references in components.
- Tailwind configuration is in `tailwind.config.js` for theme tweaks.

## Contribution
- Contributions are welcome. Open an issue or submit a pull request with clear details.

