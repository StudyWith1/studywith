// Функція для збереження даних автентифікації
function saveAuthData(authData) {
    localStorage.setItem('token', authData.token);
    localStorage.setItem('userId', authData.userId);
    localStorage.setItem('role', authData.role);
    localStorage.setItem('name', authData.name || '');
    localStorage.setItem('email', authData.email || '');
}

// Функція для отримання даних автентифікації
function getAuthData() {
    return {
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId'),
        role: localStorage.getItem('role'),
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
    };
}





// Основна функція для обробки логіну
async function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error-message');
    const minPasswordLength = 6;

    const shortpass = {
    en: `Password must be at least ${minPasswordLength} characters long`,
    ua: `Пароль має бути щонайменше ${minPasswordLength} символів завдовжки`
    };

    const currentLang = localStorage.getItem('language');

    if (password.length > 1 & password.length < minPasswordLength) {
        errorElement.textContent = shortpass[currentLang];
        return;
    }

    const fillfields = {
    en: `Please fill in all fields`,
    ua: `Будь ласка, заповніть всі поля`
    };
    
    // Базова валідація
    if (!email || !password) {
        errorElement.textContent = fillfields[currentLang];
        return;
    }

    try {
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Зберігаємо дані користувача
            const userData = {
                token: data.token,
                userId: data.user.id,
                role: data.user.role,
                name: data.user.name,
                email: data.user.email
            };
            saveAuthData(userData);
            
            // Перенаправляємо на головну сторінку
            window.location.href = '/';
        } else {
            errorElement.textContent = data.error || 'Login failed';
        }
    } catch (error) {
        console.error('Login error:', error);
        errorElement.textContent = 'Server error occurred';
    }
}

// Обробка Google Auth callback
function handleGoogleAuthCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const userId = urlParams.get('userId');
    const role = urlParams.get('role');
    const name = urlParams.get('name');

    if (token && userId && role) {
        const userData = { token, userId, role, name };
        saveAuthData(userData);
        window.location.href = '/';
    }
}

function togglePasswordVisibility() {
        const passwordField = document.getElementById('password');
        const passwordToggleButton = document.getElementById('toggle-password');

        if (passwordField.type === 'password') {
          passwordField.type = 'text';
          passwordToggleButton.textContent = '🙈'; // Змінюємо іконку на "прикритий" символ
        } else {
          passwordField.type = 'password';
          passwordToggleButton.textContent = '👁️'; // Змінюємо іконку на "видимий" символ
        }
      }

// Перевіряємо наявність параметрів Google Auth при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    handleGoogleAuthCallback();
});
