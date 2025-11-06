# 🍺 I HOP SO - Pub & Bar Website

**Site institucional do I HOP SO Pub & Bar**

Desenvolvido com HTML, CSS e JavaScript puro

---

## 📋 Sobre o Projeto

Site completo para o **I HOP SO Pub & Bar**, localizado em Ponta Grossa/PR. O site apresenta o ambiente, cardápio, eventos e permite contato direto com o estabelecimento.

### ✨ Características Principais

- 🎨 **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- 🎭 **Animações Suaves** - Transições e efeitos visuais elegantes
- 🖼️ **Galeria Ilustrativa** - Imagens SVG customizadas
- 🍺 **Cardápio Interativo** - Sistema de abas para Cervejas, Drinks, Pizzas e Porções
- 📅 **Gestão de Eventos** - Exibição de shows e eventos especiais
- 📱 **WhatsApp Flutuante** - Botão de contato direto
- 🔐 **Painel Administrativo** - Sistema completo de gerenciamento
- 🌐 **SEO Otimizado** - Meta tags, Schema.org e sitemap.xml

---

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com Grid e Flexbox
- **JavaScript (Vanilla)** - Interatividade sem frameworks
- **Font Awesome 6.4.2** - Ícones modernos
- **LocalStorage** - Persistência de dados
- **SVG** - Imagens vetoriais escaláveis

---

## 📁 Estrutura do Projeto

```
I HOP SO/
├── index.html              # Página principal
├── styles.css              # Estilos globais
├── script.js               # JavaScript principal
├── fonts.css               # Fontes customizadas
├── manifest.json           # PWA manifest
├── robots.txt              # Configuração para crawlers
├── sitemap.xml             # Mapa do site
├── .htaccess               # Configurações Apache
├── .gitignore              # Arquivos ignorados pelo Git
│
├── images/                 # Imagens e recursos visuais
│   ├── logo.png
│   ├── logo.svg
│   ├── logo2.png
│   ├── logo2.svg
│   ├── hero-background.jpg
│   └── gallery-*.svg       # 7 imagens da galeria
│
└── admin/                  # Painel administrativo
    ├── login.html
    ├── dashboard.html
    ├── admin-login.js
    ├── admin-dashboard.js
    ├── admin-content.js
    └── admin-styles.css
```

---

## 🛠️ Como Usar

### Instalação Local

1. **Clone o repositório**
```bash
git clone https://github.com/SEU_USUARIO/ihopso-website.git
cd ihopso-website
```

2. **Abra o projeto**
```bash
# Abrir diretamente no navegador
start index.html

# Ou usar um servidor local
python -m http.server 8000
```

3. **Acesse no navegador**
```
http://localhost:8000
```

### Acesso ao Painel Admin

- **URL:** `/admin/login.html`
- **Usuário:** `admin`
- **Senha:** `ihopso2024`

---

## ⚙️ Configuração

### Personalizar Informações

#### Dados do Estabelecimento
- Endereço: Rua Coronel Dulcidio, 467 - Centro, Ponta Grossa/PR
- Telefone: (42) 99855-0101
- Email: contato@ihopso.com.br
- Horário: Terça a Sexta: 18h - 00h | Sábado: 12h - 00h

#### Redes Sociais
- Facebook: https://www.facebook.com/profile.php?id=100087321584018
- Instagram: https://www.instagram.com/ihopsopg
- WhatsApp: https://wa.me/5542998550101

### Alterar Cores

Edite as variáveis CSS em `styles.css`:
```css
:root {
    --primary-color: #1a3a0f;    /* Verde escuro */
    --secondary-color: #1a1a1a;  /* Preto */
    --gold: #d4af37;              /* Dourado */
    --green-light: #2d4a2b;       /* Verde claro */
}
```

---

## 📱 Responsividade

Breakpoints:
- **Desktop:** > 1024px
- **Tablet:** 768px - 1024px
- **Mobile:** < 768px
- **Mobile Small:** < 480px

---

## 🔒 Segurança

⚠️ **IMPORTANTE:** Este projeto usa localStorage para demonstração.

Para produção, implemente:
1. Backend real (Node.js, PHP, Python)
2. Banco de dados (MySQL, PostgreSQL)
3. Autenticação JWT
4. HTTPS
5. Sanitização de inputs
6. Rate limiting

---

## 🚀 Deploy

### Hospedagem Recomendada
- Netlify (Gratuito)
- Vercel (Gratuito)
- GitHub Pages (Gratuito)
- Hostinger (Pago)

---

## 🎯 Funcionalidades

### Página Principal
- Hero com logo em destaque
- Seção Sobre com features
- Cardápio interativo (4 categorias)
- Eventos próximos
- Galeria de imagens (7 categorias)
- Formulário de contato
- Footer com redes sociais

### Painel Admin
- Dashboard com estatísticas
- Gerenciamento de eventos
- Gerenciamento de cardápio
- Mensagens de contato
- Newsletter
- Backup/Restauração

---

## 📄 Licença

Todos os direitos reservados © 2024 **I HOP SO Pub & Bar**

---

## 👨‍💻 Contato

- 📧 Email: contato@ihopso.com.br
- 📱 WhatsApp: (42) 99855-0101
- 📍 Endereço: Rua Coronel Dulcidio, 467 - Centro, Ponta Grossa/PR

---

<div align="center">
  
**Feito com 🍺 em Ponta Grossa, PR**
  
</div>
