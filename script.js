// ========================================
// CARREGAMENTO DE DADOS DINÂMICOS DO ADMIN
// ========================================

// Carregar dados ao iniciar a página
document.addEventListener('DOMContentLoaded', () => {
    loadDynamicEvents();
    loadDynamicMenu();
    loadSiteInfo();
});

// Carregar eventos dinâmicos
function loadDynamicEvents() {
    const events = JSON.parse(localStorage.getItem('ihopso_events') || '[]');
    if (events.length > 0) {
        const eventsContainer = document.querySelector('.events-grid');
        if (eventsContainer) {
            eventsContainer.innerHTML = '';
            events.forEach(event => {
                const eventCard = createEventCard(event);
                eventsContainer.appendChild(eventCard);
            });
        }
    }
}

// Criar card de evento
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
        <div class="event-image">
            <img src="${event.image || 'images/event-placeholder.jpg'}" alt="${event.title}">
            <span class="event-date">${formatDate(event.date)}</span>
        </div>
        <div class="event-info">
            <h3>${event.title}</h3>
            <p>${event.description}</p>
            <p class="event-time">⏰ ${event.time}</p>
            <p class="event-price">💰 ${event.price}</p>
        </div>
    `;
    return card;
}

// Carregar itens do cardápio dinâmicos
function loadDynamicMenu() {
    const menuItems = JSON.parse(localStorage.getItem('ihopso_menu') || '{}');
    
    Object.keys(menuItems).forEach(category => {
        const categoryContainer = document.querySelector(`#${category} .menu-grid`);
        if (categoryContainer && menuItems[category].length > 0) {
            categoryContainer.innerHTML = '';
            menuItems[category].forEach(item => {
                const menuCard = createMenuCard(item);
                categoryContainer.appendChild(menuCard);
            });
        }
    });
}

// Criar card de item do menu
function createMenuCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-item';
    card.innerHTML = `
        <h4>${item.name}</h4>
        <p>${item.description}</p>
        <span class="price">R$ ${item.price.toFixed(2)}</span>
    `;
    return card;
}

// Carregar informações do site
function loadSiteInfo() {
    const siteInfo = JSON.parse(localStorage.getItem('ihopso_site_info') || '{}');
    
    if (siteInfo.phone) {
        document.querySelectorAll('.phone-number').forEach(el => {
            el.textContent = siteInfo.phone;
        });
    }
    
    if (siteInfo.email) {
        document.querySelectorAll('.email-address').forEach(el => {
            el.textContent = siteInfo.email;
        });
    }
    
    if (siteInfo.address) {
        document.querySelectorAll('.site-address').forEach(el => {
            el.textContent = siteInfo.address;
        });
    }
    
    if (siteInfo.hours) {
        document.querySelectorAll('.opening-hours').forEach(el => {
            el.innerHTML = siteInfo.hours;
        });
    }
}

// Formatar data
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${day}/${month}`;
}

// Navegação Mobile
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animação do ícone hambúrguer
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Scroll suave e ativação de links
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });

    // Header com fundo ao rolar
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Botão voltar ao topo
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Botão voltar ao topo
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Sistema de Tabs do Menu
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active de todos os botões e conteúdos
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Adiciona active ao botão clicado e conteúdo correspondente
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Formulário de Contato
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validação básica
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        showFormMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showFormMessage('Por favor, insira um e-mail válido.', 'error');
        return;
    }
    
    // Salvar no localStorage para o admin visualizar
    const contacts = JSON.parse(localStorage.getItem('ihopso_contacts') || '[]');
    contacts.unshift({
        name: name,
        email: email,
        phone: phone,
        message: message,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('ihopso_contacts', JSON.stringify(contacts));
    
    showFormMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
    contactForm.reset();
});

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Newsletter
const newsletterForm = document.getElementById('newsletterForm');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    if (!isValidEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }
    
    // Verificar se já está inscrito
    const newsletter = JSON.parse(localStorage.getItem('ihopso_newsletter') || '[]');
    const alreadySubscribed = newsletter.some(sub => sub.email === email);
    
    if (alreadySubscribed) {
        alert('Este e-mail já está inscrito na nossa newsletter!');
        newsletterForm.reset();
        return;
    }
    
    // Salvar no localStorage
    newsletter.unshift({
        email: email,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('ihopso_newsletter', JSON.stringify(newsletter));
    
    alert('Obrigado por se inscrever! Você receberá nossas novidades em breve.');
    newsletterForm.reset();
});

// Animação de elementos ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elementos para animar
const animateElements = document.querySelectorAll('.menu-item, .event-card, .gallery-item, .feature-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Prevenção de comportamento padrão em links sociais (exemplo)
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.getAttribute('title');
        alert(`Conecte-se conosco no ${platform}! (Link a ser configurado)`);
        // Em produção, você colocaria os links reais das redes sociais
    });
});

// Galeria - Modal (opcional, implementação básica)
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const overlayText = item.querySelector('.gallery-overlay span').textContent;
        // Aqui você pode implementar um modal de galeria mais elaborado
        console.log(`Clicou em: ${overlayText}`);
        // Exemplo: abrir imagem em tamanho maior, lightbox, etc.
    });
});

// Efeito parallax suave no hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 700);
    }
});

// Contador de visitantes (exemplo simples com localStorage)
function updateVisitorCount() {
    let visits = localStorage.getItem('ihopso_visits');
    if (!visits) {
        visits = 0;
    }
    visits = parseInt(visits) + 1;
    localStorage.setItem('ihopso_visits', visits);
    console.log(`Você é o visitante número ${visits} do site!`);
}

updateVisitorCount();

// Horário de funcionamento dinâmico
function checkOpeningHours() {
    const now = new Date();
    const day = now.getDay(); // 0 = Domingo, 1 = Segunda, etc.
    const hour = now.getHours();
    
    let isOpen = false;
    let message = '';
    
    if (day === 0 || day === 1) {
        // Domingo e Segunda - Fechado
        message = 'Estamos fechados. Voltamos na terça-feira às 18h!';
    } else if (day >= 2 && day <= 4) {
        // Terça a Quinta - 18h às 00h
        if (hour >= 18 || hour < 1) {
            isOpen = true;
            message = 'Estamos abertos! Venha nos visitar!';
        } else {
            message = 'Abrimos hoje às 18h!';
        }
    } else if (day === 5 || day === 6) {
        // Sexta e Sábado - 18h às 02h
        if (hour >= 18 || hour < 2) {
            isOpen = true;
            message = 'Estamos abertos! Venha nos visitar!';
        } else {
            message = 'Abrimos hoje às 18h!';
        }
    }
    
    console.log(`Status: ${message}`);
    return { isOpen, message };
}

// Você pode usar essa função para exibir um banner de status
const status = checkOpeningHours();

// Lazy loading de imagens (se você adicionar imagens reais)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Prevenção de scroll durante carregamento
window.addEventListener('load', () => {
    document.body.style.overflow = 'visible';
    console.log('Site I HOP SO carregado com sucesso! 🍺');
});

// Detecção de dispositivo móvel
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {
    console.log('Visualização mobile detectada');
    // Você pode adicionar comportamentos específicos para mobile aqui
}

// Google Analytics (placeholder - adicione seu código de tracking)
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID');
*/

// Performance monitoring
window.addEventListener('load', () => {
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Tempo de carregamento da página: ${pageLoadTime}ms`);
    }
});

console.log('🍺 I HOP SO - Sistema inicializado com sucesso!');
