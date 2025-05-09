# Neflic GPT

- pnpm
- react-ts using vite
- tailwind css

-ESLint setup

- Should have eslint.config.js / eslint.config.mjs file
- ESLin extension in VS code should be enabled
- Eslint config file should contain Rules
- Setting.json
  - "eslint.codeActionsOnSave.rules" : null
  - "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
    },

# Features

- Login/ sign-up
  - Sign In/ Sign up form
  - redirect to Browser Page
- Browser (after authentication)
  - Header
  - Main Movie
    - Tailer in Background
    - Title & Description
    - Movie suggestions
      - MovieLists(horizontal scroll) \_ vertical scroll
- Netflix GPT
  - Search Bar
  - Movie suggestions

# Firebase

- npm install -g firebase-tools

# Deploying the APP

- Install Firebase CLI - 'npm install -g firebase-tools'
- Firebase login - firebase login
- Initialize firebase - 'firebase init', then select hosting
- Deploy command - 'firebase deploy'

# redux

- pnpm i -D @reduxjs/toolkit
- pnpm i react-redux


# Steps

- Create React APP
- Configured Tailwind css
- Header
- Routing of app
- Login form
- Sign  up form
- Form validations
- useRef hook
- Firebase setup
- Deploying our app to production
- Create sign-up user account
- Implement sign-in user api
- Create Redux store with userSlice
- Implemented sign-out
- Update profile API call
- Bug Fix- navigation to /browses page without login & back to browses if hit to /    login after login
- TMDB data base