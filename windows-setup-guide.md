# Windows Setup Guide for SoftSell Project

This guide helps you set up and run the SoftSell project on Windows.

## Prerequisites

1. Install Node.js (v16 or newer) from [nodejs.org](https://nodejs.org/)
2. Install a code editor like Visual Studio Code

## Installation Steps

1. **Extract the zip file** to a location on your computer.

2. **Open a command prompt** as administrator:
   - Press `Win + X` and select "Command Prompt (Admin)" or "Windows PowerShell (Admin)"

3. **Navigate to the project folder**:
   ```
   cd path\to\SoftSell
   ```

4. **Install dependencies including cross-env**:
   ```
   npm install
   npm install --save-dev cross-env
   ```

5. **Update package.json scripts**:
   Open `package.json` in a text editor and replace the scripts section with:

   ```json
   "scripts": {
     "dev": "cross-env NODE_ENV=development tsx server/index.ts",
     "dev:windows": "set NODE_ENV=development&& tsx server/index.ts",
     "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
     "start": "cross-env NODE_ENV=production node dist/index.js",
     "start:windows": "set NODE_ENV=production&& node dist/index.js",
     "check": "tsc",
     "db:push": "drizzle-kit push"
   }
   ```

6. **Start the development server** using one of these methods:
   
   **Option 1** (recommended, using cross-env):
   ```
   npm run dev
   ```
   
   **Option 2** (Windows-specific):
   ```
   npm run dev:windows
   ```

7. **Open the site** in your browser:
   [http://localhost:5000](http://localhost:5000)

## Troubleshooting

If you encounter any issues:

1. **Module not found errors**: 
   - Make sure all dependencies are installed correctly
   - Run `npm install` again

2. **Typescript errors**:
   - Make sure TypeScript is installed globally: `npm install -g typescript`
   
3. **Port conflicts**:
   - If port 5000 is already in use, edit `server/index.ts` to use a different port

4. **Node version issues**:
   - Check your Node.js version with `node -v`
   - Use a Node.js version manager like NVM for Windows to switch versions if needed

## Building for Production

1. Build the project:
   ```
   npm run build
   ```

2. Start the production server:
   ```
   npm run start
   ```
   or
   ```
   npm run start:windows
   ```