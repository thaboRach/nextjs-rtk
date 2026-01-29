# NextJS Chat Application

A modern chat application built with Next.js 16, Redux Toolkit, TypeScript, and SCSS Modules.

## Features

- Real-time chat interface
- Quotes display page
- Counter with Redux state management
- User verification page
- Modular and reusable React components
- API routes with Next.js
- Modern SCSS styling

## Project Structure

```
src/
	app/
		api/           # API route handlers (e.g., counter)
		chat/          # Chat page and styles
		quotes/        # Quotes page and styles
		verify/        # User verification page and styles
		layout.tsx     # Main layout
		StoreProvider.tsx # Redux provider setup
	components/
		chat-form/     # Chat form component
		chat-window/   # Chat window component
		counter/       # Counter component
		footer/        # Footer component
		message/       # Message display component
		nav/           # Navigation bar
		quotes/        # Quotes display component
	lib/
		actions.ts     # Redux actions
		createAppSlice.ts # Redux slice helper
		hooks.ts       # Custom React hooks
		store.ts       # Redux store setup
		features/      # Feature-specific Redux slices/APIs
	styles/          # Global and partial SCSS styles
	types/           # TypeScript type definitions
public/            # Static assets
```

## Technologies Used

- [Next.js 16](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS Modules](https://sass-lang.com/)
- [Prettier](https://prettier.io/) & [ESLint](https://eslint.org/)

## Installation

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd nextjs-chat
   ```
2. **Install dependencies:**
   ```sh
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

## Usage

### Development

Start the development server:

```sh
pnpm dev
# or
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```sh
pnpm build
pnpm start
# or
npm run build && npm start
# or
yarn build && yarn start
```

---

Feel free to contribute or open issues for improvements!
