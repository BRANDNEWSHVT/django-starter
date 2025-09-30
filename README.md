# Django Boilerplate

I'm learning Django and interested to integrate the [Inertia.js](https://inertiajs.com/) because i want to use [React](https://react.dev) as a view layer.

## How to run

1. Create python environment

```bash
  uv -m venv .venv
```

2. Activate the environment

- Mac / Linux

```bash
  source .venv/bin/activate
```

- Windows

```bash
  .venv\Scripts\activate.bat
```

3. Install the required modules

```bash
  uv sync
```

4. copy .env.example and adjust it

```bash
  cp .env.example .env
```

5. Install node dependencies and build

```bash
  npm install
  npm run build

  # If you want to start developing
  npm run dev
```

6. Start the server

```bash
uv run manage.py runserver
```
