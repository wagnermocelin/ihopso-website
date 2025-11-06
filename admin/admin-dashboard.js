// Admin Dashboard System - I HOP SO

// Verificar autenticação
window.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('ihopso_admin_logged');
    
    if (isLoggedIn !== 'true') {
        window.location.href = 'login.html';
        return;
    }
    
    initDashboard();
});

// Inicializar Dashboard
function initDashboard() {
    loadStatistics();
    loadContacts();
    loadNewsletter();
    loadRecentActivity();
    loadEvents();
    loadMenuItems();
    setupNavigation();
    setupEventHandlers();
}

// Navegação entre seções
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
    const pageTitle = document.getElementById('pageTitle');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetSection = item.getAttribute('data-section');
            
            // Remover active de todos
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Adicionar active ao clicado
            item.classList.add('active');
            document.getElementById(`${targetSection}-section`).classList.add('active');
            
            // Atualizar título
            const sectionName = item.querySelector('span:last-child').textContent;
            pageTitle.textContent = sectionName;
            
            // Fechar sidebar em mobile
            if (window.innerWidth <= 768) {
                document.querySelector('.sidebar').classList.remove('active');
            }
        });
    });
    
    // Menu toggle mobile
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
}

// Carregar estatísticas
function loadStatistics() {
    const contacts = JSON.parse(localStorage.getItem('ihopso_contacts') || '[]');
    const newsletter = JSON.parse(localStorage.getItem('ihopso_newsletter') || '[]');
    const visitors = localStorage.getItem('ihopso_visits') || '0';
    
    document.getElementById('totalContacts').textContent = contacts.length;
    document.getElementById('totalNewsletter').textContent = newsletter.length;
    document.getElementById('totalVisitors').textContent = visitors;
}

// Carregar contatos
function loadContacts() {
    const contacts = JSON.parse(localStorage.getItem('ihopso_contacts') || '[]');
    const tableBody = document.getElementById('contactsTableBody');
    const recentContacts = document.getElementById('recentContacts');
    
    if (contacts.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="6" class="empty-state">Nenhuma mensagem recebida ainda</td></tr>';
        recentContacts.innerHTML = '<p class="empty-state">Nenhuma mensagem ainda</p>';
        return;
    }
    
    // Tabela completa
    tableBody.innerHTML = contacts.map((contact, index) => `
        <tr>
            <td>${formatDate(contact.timestamp)}</td>
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.phone || '-'}</td>
            <td>${contact.message.substring(0, 50)}${contact.message.length > 50 ? '...' : ''}</td>
            <td>
                <button class="btn-delete" onclick="deleteContact(${index})">🗑️</button>
            </td>
        </tr>
    `).join('');
    
    // Mensagens recentes (últimas 5)
    recentContacts.innerHTML = contacts.slice(0, 5).map(contact => `
        <div class="activity-item">
            <span class="activity-icon">📧</span>
            <div class="activity-info">
                <p>${contact.name}</p>
                <small>${contact.email} - ${formatDate(contact.timestamp)}</small>
            </div>
        </div>
    `).join('');
}

// Carregar newsletter
function loadNewsletter() {
    const newsletter = JSON.parse(localStorage.getItem('ihopso_newsletter') || '[]');
    const tableBody = document.getElementById('newsletterTableBody');
    
    if (newsletter.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="4" class="empty-state">Nenhum inscrito ainda</td></tr>';
        return;
    }
    
    tableBody.innerHTML = newsletter.map((subscriber, index) => `
        <tr>
            <td>${formatDate(subscriber.timestamp)}</td>
            <td>${subscriber.email}</td>
            <td><span style="color: green;">✓ Ativo</span></td>
            <td>
                <button class="btn-delete" onclick="deleteNewsletter(${index})">🗑️</button>
            </td>
        </tr>
    `).join('');
}

// Carregar atividade recente
function loadRecentActivity() {
    const activities = JSON.parse(localStorage.getItem('ihopso_activities') || '[]');
    const activityList = document.getElementById('recentActivity');
    
    if (activities.length === 0) {
        activityList.innerHTML = `
            <div class="activity-item">
                <span class="activity-icon">🌐</span>
                <div class="activity-info">
                    <p>Sistema iniciado</p>
                    <small>Agora</small>
                </div>
            </div>
        `;
        return;
    }
    
    activityList.innerHTML = activities.slice(0, 10).map(activity => `
        <div class="activity-item">
            <span class="activity-icon">📝</span>
            <div class="activity-info">
                <p>${activity.action}</p>
                <small>${formatDate(activity.timestamp)}</small>
            </div>
        </div>
    `).join('');
}

// Event Handlers
function setupEventHandlers() {
    // Logout
    document.getElementById('logoutBtn').addEventListener('click', logout);
    
    // Limpar contatos
    document.getElementById('clearContacts').addEventListener('click', () => {
        if (confirm('Tem certeza que deseja limpar todas as mensagens?')) {
            localStorage.removeItem('ihopso_contacts');
            loadContacts();
            loadStatistics();
            alert('Mensagens limpas com sucesso!');
        }
    });
    
    // Exportar contatos
    document.getElementById('exportContacts').addEventListener('click', () => {
        const contacts = JSON.parse(localStorage.getItem('ihopso_contacts') || '[]');
        exportToJSON(contacts, 'contatos-ihopso.json');
    });
    
    // Limpar newsletter
    document.getElementById('clearNewsletter').addEventListener('click', () => {
        if (confirm('Tem certeza que deseja limpar todos os inscritos?')) {
            localStorage.removeItem('ihopso_newsletter');
            loadNewsletter();
            loadStatistics();
            alert('Inscritos removidos com sucesso!');
        }
    });
    
    // Exportar newsletter
    document.getElementById('exportNewsletter').addEventListener('click', () => {
        const newsletter = JSON.parse(localStorage.getItem('ihopso_newsletter') || '[]');
        exportToJSON(newsletter, 'newsletter-ihopso.json');
    });
    
    // Alterar senha
    document.getElementById('changePasswordForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (newPassword !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }
        
        if (newPassword.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres!');
            return;
        }
        
        alert('⚠️ Em produção, implemente a alteração de senha no backend!');
        e.target.reset();
    });
    
    // Backup
    document.getElementById('backupBtn').addEventListener('click', () => {
        const data = {
            contacts: JSON.parse(localStorage.getItem('ihopso_contacts') || '[]'),
            newsletter: JSON.parse(localStorage.getItem('ihopso_newsletter') || '[]'),
            activities: JSON.parse(localStorage.getItem('ihopso_activities') || '[]'),
            visits: localStorage.getItem('ihopso_visits') || '0',
            timestamp: new Date().toISOString()
        };
        
        exportToJSON(data, `backup-ihopso-${formatDateForFile()}.json`);
        alert('Backup realizado com sucesso!');
    });
    
    // Restaurar
    document.getElementById('restoreBtn').addEventListener('click', () => {
        document.getElementById('restoreFile').click();
    });
    
    document.getElementById('restoreFile').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                
                if (confirm('Tem certeza que deseja restaurar este backup? Os dados atuais serão substituídos.')) {
                    if (data.contacts) localStorage.setItem('ihopso_contacts', JSON.stringify(data.contacts));
                    if (data.newsletter) localStorage.setItem('ihopso_newsletter', JSON.stringify(data.newsletter));
                    if (data.activities) localStorage.setItem('ihopso_activities', JSON.stringify(data.activities));
                    if (data.visits) localStorage.setItem('ihopso_visits', data.visits);
                    
                    alert('Backup restaurado com sucesso!');
                    location.reload();
                }
            } catch (error) {
                alert('Erro ao ler o arquivo de backup!');
            }
        };
        reader.readAsText(file);
    });
    
    // Limpar todos os dados
    document.getElementById('clearAllDataBtn').addEventListener('click', () => {
        if (confirm('⚠️ ATENÇÃO! Esta ação irá apagar TODOS os dados. Tem certeza?')) {
            if (confirm('Esta ação é IRREVERSÍVEL! Confirma novamente?')) {
                localStorage.removeItem('ihopso_contacts');
                localStorage.removeItem('ihopso_newsletter');
                localStorage.removeItem('ihopso_activities');
                localStorage.setItem('ihopso_visits', '0');
                
                alert('Todos os dados foram apagados!');
                location.reload();
            }
        }
    });
}

// Deletar contato
function deleteContact(index) {
    if (confirm('Deseja excluir esta mensagem?')) {
        const contacts = JSON.parse(localStorage.getItem('ihopso_contacts') || '[]');
        contacts.splice(index, 1);
        localStorage.setItem('ihopso_contacts', JSON.stringify(contacts));
        loadContacts();
        loadStatistics();
    }
}

// Deletar newsletter
function deleteNewsletter(index) {
    if (confirm('Deseja remover este inscrito?')) {
        const newsletter = JSON.parse(localStorage.getItem('ihopso_newsletter') || '[]');
        newsletter.splice(index, 1);
        localStorage.setItem('ihopso_newsletter', JSON.stringify(newsletter));
        loadNewsletter();
        loadStatistics();
    }
}

// Logout
function logout() {
    if (confirm('Deseja realmente sair?')) {
        localStorage.removeItem('ihopso_admin_logged');
        window.location.href = 'login.html';
    }
}

// Exportar para JSON
function exportToJSON(data, filename) {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

// Formatar data
function formatDate(timestamp) {
    if (!timestamp) return '-';
    const date = new Date(timestamp);
    return date.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Formatar data para arquivo
function formatDateForFile() {
    const date = new Date();
    return date.toISOString().split('T')[0];
}

// ========================================
// GERENCIAMENTO DE EVENTOS
// ========================================

function loadEvents() {
    const events = getEvents();
    const eventsGrid = document.getElementById('eventsGrid');
    
    if (!eventsGrid) return;
    
    if (events.length === 0) {
        eventsGrid.innerHTML = '<p class="empty-state">Nenhum evento cadastrado ainda</p>';
        return;
    }
    
    eventsGrid.innerHTML = events.map(event => `
        <div class="event-admin-card">
            <h3>${event.title}</h3>
            <p><strong>Data:</strong> ${event.date}</p>
            <p><strong>Horário:</strong> ${event.time}</p>
            <p><strong>Preço:</strong> ${event.price}</p>
            <p>${event.description}</p>
            <div class="card-actions">
                <button class="btn-edit" onclick="editEvent(${event.id})">✏️ Editar</button>
                <button class="btn-delete" onclick="removeEvent(${event.id})">🗑️ Excluir</button>
            </div>
        </div>
    `).join('');
}

function removeEvent(id) {
    if (confirm('Deseja realmente excluir este evento?')) {
        deleteEvent(id);
        loadEvents();
        alert('Evento excluído com sucesso!');
    }
}

function editEvent(id) {
    const events = getEvents();
    const event = events.find(e => e.id === id);
    
    if (!event) return;
    
    const newTitle = prompt('Título do evento:', event.title);
    if (!newTitle) return;
    
    const newDescription = prompt('Descrição:', event.description);
    if (!newDescription) return;
    
    const newDate = prompt('Data (YYYY-MM-DD):', event.date);
    if (!newDate) return;
    
    const newTime = prompt('Horário:', event.time);
    if (!newTime) return;
    
    const newPrice = prompt('Preço:', event.price);
    if (!newPrice) return;
    
    updateEvent(id, {
        title: newTitle,
        description: newDescription,
        date: newDate,
        time: newTime,
        price: newPrice
    });
    
    loadEvents();
    alert('Evento atualizado com sucesso!');
}

// ========================================
// GERENCIAMENTO DE CARDÁPIO
// ========================================

function loadMenuItems(category = 'beers') {
    const menu = getMenu();
    const menuGrid = document.getElementById('menuItemsGrid');
    
    if (!menuGrid) return;
    
    const items = menu[category] || [];
    
    if (items.length === 0) {
        menuGrid.innerHTML = '<p class="empty-state">Nenhum item cadastrado nesta categoria</p>';
        return;
    }
    
    menuGrid.innerHTML = items.map(item => `
        <div class="menu-admin-card">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <p class="price">R$ ${item.price.toFixed(2)}</p>
            <div class="card-actions">
                <button class="btn-edit" onclick="editMenuItem('${category}', ${item.id})">✏️ Editar</button>
                <button class="btn-delete" onclick="removeMenuItem('${category}', ${item.id})">🗑️ Excluir</button>
            </div>
        </div>
    `).join('');
}

// Adicionar event listeners para as tabs do cardápio
document.addEventListener('DOMContentLoaded', () => {
    const menuTabs = document.querySelectorAll('.tab-btn-admin');
    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            menuTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const category = tab.getAttribute('data-category');
            loadMenuItems(category);
        });
    });
});

function removeMenuItem(category, id) {
    if (confirm('Deseja realmente excluir este item?')) {
        deleteMenuItem(category, id);
        loadMenuItems(category);
        alert('Item excluído com sucesso!');
    }
}

function editMenuItem(category, id) {
    const menu = getMenu();
    const item = menu[category].find(i => i.id === id);
    
    if (!item) return;
    
    const newName = prompt('Nome do item:', item.name);
    if (!newName) return;
    
    const newDescription = prompt('Descrição:', item.description);
    if (!newDescription) return;
    
    const newPrice = prompt('Preço:', item.price);
    if (!newPrice) return;
    
    updateMenuItem(category, id, {
        name: newName,
        description: newDescription,
        price: parseFloat(newPrice)
    });
    
    loadMenuItems(category);
    alert('Item atualizado com sucesso!');
}

// Auto-refresh a cada 30 segundos
setInterval(() => {
    loadStatistics();
    loadRecentActivity();
}, 30000);

console.log('📊 Dashboard Admin carregado com sucesso!');
