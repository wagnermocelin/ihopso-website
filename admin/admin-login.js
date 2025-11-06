// Admin Login System - I HOP SO

// Credenciais padrão (em produção, use autenticação backend real)
const DEFAULT_CREDENTIALS = {
    username: 'admin',
    password: 'ihopso2024'
};

// Elementos do DOM
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('remember');

// Verificar se já está logado
window.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('ihopso_admin_logged');
    const rememberMe = localStorage.getItem('ihopso_admin_remember');
    
    if (isLoggedIn === 'true' && rememberMe === 'true') {
        window.location.href = 'dashboard.html';
    }
    
    // Auto-preencher se lembrado
    if (rememberMe === 'true') {
        const savedUsername = localStorage.getItem('ihopso_admin_username');
        if (savedUsername) {
            usernameInput.value = savedUsername;
            rememberCheckbox.checked = true;
        }
    }
});

// Processar login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    const remember = rememberCheckbox.checked;
    
    // Validação
    if (!username || !password) {
        showMessage('Por favor, preencha todos os campos.', 'error');
        return;
    }
    
    // Verificar credenciais
    if (username === DEFAULT_CREDENTIALS.username && password === DEFAULT_CREDENTIALS.password) {
        // Login bem-sucedido
        showMessage('Login realizado com sucesso! Redirecionando...', 'success');
        
        // Salvar estado de login
        localStorage.setItem('ihopso_admin_logged', 'true');
        localStorage.setItem('ihopso_admin_username', username);
        localStorage.setItem('ihopso_admin_login_time', new Date().toISOString());
        
        if (remember) {
            localStorage.setItem('ihopso_admin_remember', 'true');
        } else {
            localStorage.removeItem('ihopso_admin_remember');
        }
        
        // Registrar atividade
        logActivity('Login realizado', username);
        
        // Redirecionar após 1 segundo
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
        
    } else {
        // Login falhou
        showMessage('Usuário ou senha incorretos.', 'error');
        passwordInput.value = '';
        passwordInput.focus();
        
        // Registrar tentativa falha
        logFailedAttempt(username);
    }
});

// Mostrar mensagem
function showMessage(message, type) {
    loginMessage.textContent = message;
    loginMessage.className = `login-message ${type}`;
    
    if (type === 'error') {
        setTimeout(() => {
            loginMessage.className = 'login-message';
        }, 5000);
    }
}

// Registrar atividade
function logActivity(action, user) {
    const activities = JSON.parse(localStorage.getItem('ihopso_activities') || '[]');
    activities.unshift({
        action: action,
        user: user,
        timestamp: new Date().toISOString(),
        ip: 'Local' // Em produção, capturar IP real
    });
    
    // Manter apenas as últimas 100 atividades
    if (activities.length > 100) {
        activities.pop();
    }
    
    localStorage.setItem('ihopso_activities', JSON.stringify(activities));
}

// Registrar tentativa falha
function logFailedAttempt(username) {
    const attempts = JSON.parse(localStorage.getItem('ihopso_failed_attempts') || '[]');
    attempts.unshift({
        username: username,
        timestamp: new Date().toISOString()
    });
    
    // Manter apenas as últimas 50 tentativas
    if (attempts.length > 50) {
        attempts.pop();
    }
    
    localStorage.setItem('ihopso_failed_attempts', JSON.stringify(attempts));
}

// Prevenir múltiplos envios
let isSubmitting = false;
loginForm.addEventListener('submit', (e) => {
    if (isSubmitting) {
        e.preventDefault();
        return;
    }
    isSubmitting = true;
    setTimeout(() => {
        isSubmitting = false;
    }, 2000);
});

console.log('🔐 Sistema de Login Admin carregado');
