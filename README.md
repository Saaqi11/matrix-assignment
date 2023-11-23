# Project Setup

Follow these steps to run the project locally:

1. **Install PHP Dependencies using Composer:**
    ```bash
    composer install
    ```

2. **Install JavaScript Dependencies using npm:**
    ```bash
    npm install
    ```

3. **Create a Copy of `.env.example` as `.env`:**
    ```bash
    cp .env.example .env
    ```

4. **Set the Base URL in the `.env` file:**
    Open the `.env` file and set the base URL:
    ```env
    VITE_APP_URL=http://127.0.0.1:8000/
    ```

5. **Run the Development Server:**
    ```bash
    npm run dev
    ```

6. **Start the Laravel Server:**
    ```bash
    php artisan serve
    ```

Now, your project is fully set up and running locally. Access the application through the specified base URL after starting both the development server and Laravel server. Adjust the port numbers if needed.
