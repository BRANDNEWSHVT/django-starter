# Django Boilerplate with Inertia.js & React

A modern full-stack Django boilerplate that integrates [Inertia.js](https://inertiajs.com/) with [React](https://react.dev) as the view layer. Includes a complete todo app example with PostgreSQL database.

## Tech Stack

- **Backend**: Django 5.2.6 with Python ≥3.10
- **Frontend**: React 19.2.0 with TypeScript
- **Bridge**: Inertia.js for seamless client-server communication
- **Database**: PostgreSQL
- **Build Tool**: Vite 7.1.7 with HMR support
- **Styling**: TailwindCSS 4.1.13 with shadcn/ui components
- **Icons**: Lucide React
- **Package Manager**: uv (Python) and npm (Node.js)

## Features

✨ **No API layer needed** - Inertia handles data flow between Django views and React components
✨ **Hot Module Replacement** - Instant feedback during development
✨ **Modern UI** - Pre-configured with shadcn/ui and TailwindCSS
✨ **Type-safe** - TypeScript for frontend code
✨ **CSRF protected** - Configured for Inertia
✨ **Example Todo App** - Complete CRUD operations with React UI

## Prerequisites

- Python ≥3.10
- Node.js ≥18
- PostgreSQL (for production; SQLite can be used for development)
- uv package manager

## Installation & Setup

### 1. Create Python virtual environment

```bash
uv venv .venv
```

### 2. Activate the environment

**Mac / Linux:**
```bash
source .venv/bin/activate
```

**Windows:**
```bash
.venv\Scripts\activate.bat
```

### 3. Install Python dependencies

```bash
uv sync
```

### 4. Configure environment variables

```bash
cp .env.example .env
```

Update `.env` with your PostgreSQL credentials:
```bash
DB_ENGINE=django.db.backends.postgresql
DB_NAME=todo
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
```

### 5. Create PostgreSQL database

```bash
creatdb todo
```

### 6. Install Node dependencies

```bash
npm install
```

### 7. Run database migrations

```bash
uv run manage.py migrate
```

### 8. Build frontend assets

```bash
npm run build
uv run manage.py collectstatic --noinput
```

## Running the Application

### Development Mode

In separate terminals:

**Terminal 1 - Vite dev server (HMR):**
```bash
npm run dev
```

**Terminal 2 - Django server:**
```bash
uv run manage.py runserver
```

Access the app at `http://localhost:8000`

### Production Mode

```bash
npm run build
uv run manage.py collectstatic --noinput
uv run manage.py runserver
```

## Project Structure

```
.
├── app/                          # Django main app
│   ├── settings.py              # Django configuration
│   ├── urls.py                  # URL routing
│   ├── views.py                 # View functions
│   └── wsgi.py / asgi.py        # WSGI/ASGI config
├── todo/                         # Todo app (example)
│   ├── models.py                # Todo model
│   ├── views.py                 # API endpoints
│   ├── admin.py                 # Django admin config
│   ├── urls.py                  # Todo routes
│   └── migrations/              # Database migrations
├── assets/                       # Frontend assets
│   ├── js/
│   │   ├── pages/               # Inertia page components
│   │   │   ├── Home.tsx         # Home page
│   │   │   └── Todos.tsx        # Todo list page
│   │   ├── components/          # Reusable React components
│   │   │   └── ui/              # shadcn/ui components
│   │   ├── lib/                 # Utility functions
│   │   └── main.js              # Inertia app initialization
│   ├── css/
│   │   └── index.css            # TailwindCSS styles
│   └── dist/                    # Built assets (generated)
├── templates/
│   └── base.html                # Inertia layout template
├── static/                      # Static files (generated)
├── vite.config.js               # Vite configuration
├── components.json              # shadcn/ui config
├── tsconfig.json                # TypeScript config
├── package.json                 # Node dependencies
├── requirements.txt             # Python dependencies
└── manage.py                    # Django CLI
```

## Available Routes

- `/` - Home page
- `/todos/` - Todo list application
- `/admin/` - Django admin interface
- `/api/todos/` - Get all todos (GET)
- `/api/todos/create/` - Create new todo (POST)
- `/api/todos/<id>/` - Update todo (PUT)
- `/api/todos/<id>/delete/` - Delete todo (DELETE)

## Todo App Features

### Backend (Django)
- RESTful API endpoints for todo operations
- PostgreSQL database with Todo model
- Django admin interface for managing todos
- Automatic timestamps (created_at, updated_at)

### Frontend (React)
- Add new todos with title and description
- Toggle completion status
- Delete todos
- Real-time UI updates
- Responsive design with TailwindCSS
- Completion statistics

## Database Models

### Todo
```python
class Todo(models.Model):
    title: CharField(max_length=200)
    description: TextField(blank=True, null=True)
    completed: BooleanField(default=False)
    created_at: DateTimeField(auto_now_add=True)
    updated_at: DateTimeField(auto_now=True)
```

## Useful Commands

```bash
# Create migrations
uv run manage.py makemigrations

# Apply migrations
uv run manage.py migrate

# Create superuser for admin
uv run manage.py createsuperuser

# Access Django shell
uv run manage.py shell

# Collect static files
uv run manage.py collectstatic

# Build frontend for production
npm run build

# Development with HMR
npm run dev
```

## Configuration

### Environment Variables

See `.env.example` for all available options:
- `APP_DEBUG` - Django debug mode
- `DJANGO_VITE_DEV_MODE` - Vite dev mode
- `DJANGO_VITE_DEV_SERVER_HOST` - Vite server host
- `DJANGO_VITE_DEV_SERVER_PORT` - Vite server port
- `DB_*` - PostgreSQL connection settings

### Vite Configuration

- Dev server runs on port 5173 (configurable)
- Base path set to `/static/`
- React and TailwindCSS plugins enabled
- Path alias `@` points to `assets/js/`

## Troubleshooting

### "No changes detected" during makemigrations
- Ensure the app is in `INSTALLED_APPS` in settings.py
- Check that models.py exists and has model definitions
- Verify migrations directory exists with `__init__.py`

### Static files not loading
- Run `npm run build` to build frontend assets
- Run `uv run manage.py collectstatic --noinput`
- Check that `STATIC_ROOT` and `STATICFILES_DIRS` are configured

### Database connection errors
- Verify PostgreSQL is running
- Check `.env` database credentials
- Ensure database exists: `createdb todo`

## Learning Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [Inertia.js Documentation](https://inertiajs.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)

## License

MIT
