// ========================================
// GERENCIAMENTO DE CONTEÚDO DINÂMICO
// ========================================

// Inicializar dados padrão se não existirem
function initializeDefaultData() {
    // Eventos padrão
    if (!localStorage.getItem('ihopso_events')) {
        const defaultEvents = [
            {
                id: 1,
                title: 'Música ao Vivo',
                description: 'Banda local com o melhor do rock',
                date: '2024-12-15',
                time: '21:00',
                price: 'Entrada Gratuita',
                image: 'images/event1.jpg'
            },
            {
                id: 2,
                title: 'Happy Hour Especial',
                description: 'Cervejas com 50% de desconto',
                date: '2024-12-20',
                time: '18:00 - 20:00',
                price: 'Promoção',
                image: 'images/event2.jpg'
            }
        ];
        localStorage.setItem('ihopso_events', JSON.stringify(defaultEvents));
    }

    // Cardápio padrão
    if (!localStorage.getItem('ihopso_menu')) {
        const defaultMenu = {
            beers: [
                { id: 1, name: 'IPA Artesanal', description: 'Cerveja com amargor equilibrado e notas cítricas', price: 18.00 },
                { id: 2, name: 'Pilsen Premium', description: 'Cerveja leve e refrescante', price: 15.00 },
                { id: 3, name: 'Stout Imperial', description: 'Cerveja escura com notas de café e chocolate', price: 22.00 }
            ],
            drinks: [
                { id: 1, name: 'Mojito Clássico', description: 'Rum, hortelã, limão e açúcar', price: 25.00 },
                { id: 2, name: 'Caipirinha Premium', description: 'Cachaça artesanal com frutas da estação', price: 20.00 },
                { id: 3, name: 'Gin Tônica', description: 'Gin premium com tônica e especiarias', price: 28.00 }
            ],
            pizzas: [
                { id: 1, name: 'Margherita', description: 'Molho de tomate, mussarela, manjericão', price: 45.00 },
                { id: 2, name: 'Calabresa', description: 'Molho de tomate, mussarela, calabresa, cebola', price: 48.00 },
                { id: 3, name: 'Quatro Queijos', description: 'Mussarela, gorgonzola, parmesão, provolone', price: 52.00 }
            ],
            porcoes: [
                { id: 1, name: 'Batata Frita', description: 'Porção de batatas crocantes', price: 25.00 },
                { id: 2, name: 'Frango à Passarinho', description: 'Frango frito temperado', price: 35.00 },
                { id: 3, name: 'Isca de Peixe', description: 'Iscas de peixe empanadas', price: 38.00 }
            ]
        };
        localStorage.setItem('ihopso_menu', JSON.stringify(defaultMenu));
    }

    // Informações do site
    if (!localStorage.getItem('ihopso_site_info')) {
        const defaultInfo = {
            phone: '(11) 99999-9999',
            email: 'contato@ihopso.com.br',
            address: 'Rua Exemplo, 123 - Centro',
            hours: 'Terça a Quinta: 18h - 00h<br>Sexta e Sábado: 18h - 02h<br>Domingo e Segunda: Fechado'
        };
        localStorage.setItem('ihopso_site_info', JSON.stringify(defaultInfo));
    }
}

// ========================================
// GERENCIAMENTO DE EVENTOS
// ========================================

function getEvents() {
    return JSON.parse(localStorage.getItem('ihopso_events') || '[]');
}

function saveEvents(events) {
    localStorage.setItem('ihopso_events', JSON.stringify(events));
    logActivity('Eventos atualizados');
}

function addEvent(event) {
    const events = getEvents();
    event.id = Date.now();
    events.push(event);
    saveEvents(events);
    return event;
}

function updateEvent(id, updatedEvent) {
    const events = getEvents();
    const index = events.findIndex(e => e.id === id);
    if (index !== -1) {
        events[index] = { ...events[index], ...updatedEvent };
        saveEvents(events);
        return events[index];
    }
    return null;
}

function deleteEvent(id) {
    const events = getEvents();
    const filtered = events.filter(e => e.id !== id);
    saveEvents(filtered);
}

// ========================================
// GERENCIAMENTO DE CARDÁPIO
// ========================================

function getMenu() {
    return JSON.parse(localStorage.getItem('ihopso_menu') || '{}');
}

function saveMenu(menu) {
    localStorage.setItem('ihopso_menu', JSON.stringify(menu));
    logActivity('Cardápio atualizado');
}

function addMenuItem(category, item) {
    const menu = getMenu();
    if (!menu[category]) {
        menu[category] = [];
    }
    item.id = Date.now();
    menu[category].push(item);
    saveMenu(menu);
    return item;
}

function updateMenuItem(category, id, updatedItem) {
    const menu = getMenu();
    if (menu[category]) {
        const index = menu[category].findIndex(item => item.id === id);
        if (index !== -1) {
            menu[category][index] = { ...menu[category][index], ...updatedItem };
            saveMenu(menu);
            return menu[category][index];
        }
    }
    return null;
}

function deleteMenuItem(category, id) {
    const menu = getMenu();
    if (menu[category]) {
        menu[category] = menu[category].filter(item => item.id !== id);
        saveMenu(menu);
    }
}

// ========================================
// GERENCIAMENTO DE INFORMAÇÕES DO SITE
// ========================================

function getSiteInfo() {
    return JSON.parse(localStorage.getItem('ihopso_site_info') || '{}');
}

function saveSiteInfo(info) {
    localStorage.setItem('ihopso_site_info', JSON.stringify(info));
    logActivity('Informações do site atualizadas');
}

function updateSiteInfo(field, value) {
    const info = getSiteInfo();
    info[field] = value;
    saveSiteInfo(info);
}

// ========================================
// LOG DE ATIVIDADES
// ========================================

function logActivity(message) {
    const activities = JSON.parse(localStorage.getItem('ihopso_activities') || '[]');
    activities.unshift({
        message: message,
        timestamp: new Date().toISOString(),
        user: localStorage.getItem('ihopso_admin_username') || 'admin'
    });
    
    // Manter apenas as últimas 50 atividades
    if (activities.length > 50) {
        activities.pop();
    }
    
    localStorage.setItem('ihopso_activities', JSON.stringify(activities));
}

// ========================================
// EXPORTAR/IMPORTAR DADOS
// ========================================

function exportAllData() {
    const data = {
        events: getEvents(),
        menu: getMenu(),
        siteInfo: getSiteInfo(),
        contacts: JSON.parse(localStorage.getItem('ihopso_contacts') || '[]'),
        newsletter: JSON.parse(localStorage.getItem('ihopso_newsletter') || '[]'),
        activities: JSON.parse(localStorage.getItem('ihopso_activities') || '[]'),
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ihopso-backup-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
    
    logActivity('Backup completo exportado');
}

function importData(jsonData) {
    try {
        const data = JSON.parse(jsonData);
        
        if (data.events) localStorage.setItem('ihopso_events', JSON.stringify(data.events));
        if (data.menu) localStorage.setItem('ihopso_menu', JSON.stringify(data.menu));
        if (data.siteInfo) localStorage.setItem('ihopso_site_info', JSON.stringify(data.siteInfo));
        if (data.contacts) localStorage.setItem('ihopso_contacts', JSON.stringify(data.contacts));
        if (data.newsletter) localStorage.setItem('ihopso_newsletter', JSON.stringify(data.newsletter));
        
        logActivity('Dados importados com sucesso');
        return true;
    } catch (error) {
        console.error('Erro ao importar dados:', error);
        return false;
    }
}

// Inicializar dados ao carregar
initializeDefaultData();

// Exportar funções para uso global
window.adminContent = {
    // Eventos
    getEvents,
    addEvent,
    updateEvent,
    deleteEvent,
    
    // Cardápio
    getMenu,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
    
    // Informações do site
    getSiteInfo,
    updateSiteInfo,
    
    // Utilidades
    exportAllData,
    importData,
    logActivity
};
