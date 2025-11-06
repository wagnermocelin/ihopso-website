# 🔐 Painel Administrativo - I HOP SO

Sistema de administração completo para gerenciar o site do pub I HOP SO.

## 📋 Acesso

**URL de Acesso:** `admin/login.html`

**Credenciais Padrão:**
- **Usuário:** `admin`
- **Senha:** `ihopso2024`

⚠️ **IMPORTANTE:** Altere a senha após o primeiro acesso!

## 🎯 Funcionalidades

### 1. Dashboard
- Visão geral de estatísticas
- Total de mensagens recebidas
- Total de inscritos na newsletter
- Contador de visitantes
- Atividade recente do sistema

### 2. Gestão de Contatos
- Visualizar todas as mensagens recebidas pelo formulário
- Ver detalhes: nome, e-mail, telefone, mensagem e data
- Excluir mensagens individualmente
- Limpar todas as mensagens
- Exportar dados em JSON

### 3. Gestão de Newsletter
- Lista de todos os inscritos
- Ver e-mail e data de inscrição
- Status de cada inscrito
- Remover inscritos
- Exportar lista completa

### 4. Gerenciamento de Eventos
- Visualizar eventos cadastrados
- Adicionar novos eventos (em desenvolvimento)
- Editar eventos existentes
- Excluir eventos

### 5. Gerenciamento de Cardápio
- Visualizar itens do cardápio
- Organizado por categorias (Cervejas, Drinks, Petiscos)
- Adicionar/Editar/Remover itens (em desenvolvimento)

### 6. Estatísticas e Análises
- Visitas por dia
- Páginas mais visitadas
- Dispositivos utilizados (Mobile/Desktop/Tablet)
- Horários de pico de acesso

### 7. Configurações
- Alterar senha do administrador
- Editar informações do site
- Fazer backup de todos os dados
- Restaurar backup anterior
- Limpar todos os dados (zona de perigo)

## 💾 Sistema de Armazenamento

Os dados são armazenados localmente no navegador usando **localStorage**:

- `ihopso_contacts` - Mensagens do formulário de contato
- `ihopso_newsletter` - Inscritos na newsletter
- `ihopso_activities` - Log de atividades do sistema
- `ihopso_visits` - Contador de visitantes
- `ihopso_admin_logged` - Estado de login
- `ihopso_admin_username` - Nome do usuário logado
- `ihopso_admin_remember` - Opção "lembrar-me"

## 🔄 Integração com o Site Principal

O site principal (`index.html`) está integrado com o painel admin:

### Formulário de Contato
Quando um visitante envia uma mensagem:
1. Os dados são validados
2. Salvos no localStorage
3. Ficam disponíveis no painel admin

### Newsletter
Quando alguém se inscreve:
1. E-mail é validado
2. Verifica duplicatas
3. Salva no localStorage
4. Aparece no painel admin

### Contador de Visitas
- Incrementa automaticamente a cada acesso
- Exibido no dashboard

## 📊 Exportação de Dados

Você pode exportar dados em formato JSON:

- **Contatos:** Todas as mensagens recebidas
- **Newsletter:** Lista completa de e-mails
- **Backup Completo:** Todos os dados do sistema

## 🔒 Segurança

### Implementado:
- Sistema de login com credenciais
- Proteção contra indexação (noindex, nofollow)
- Validação de sessão
- Opção "lembrar-me"
- Log de atividades
- Log de tentativas de login falhas

### Recomendações para Produção:
1. **Implementar autenticação backend real**
2. **Usar HTTPS obrigatoriamente**
3. **Adicionar rate limiting**
4. **Implementar 2FA (autenticação de dois fatores)**
5. **Usar banco de dados real (não localStorage)**
6. **Adicionar níveis de permissão**
7. **Implementar logs de auditoria**
8. **Adicionar CAPTCHA no login**

## 🚀 Próximos Passos para Produção

### Backend Necessário:
```javascript
// Exemplo de endpoints necessários:
POST /api/admin/login
POST /api/admin/logout
GET  /api/admin/contacts
DELETE /api/admin/contacts/:id
GET  /api/admin/newsletter
DELETE /api/admin/newsletter/:id
POST /api/admin/events
PUT  /api/admin/events/:id
DELETE /api/admin/events/:id
POST /api/admin/menu
PUT  /api/admin/menu/:id
DELETE /api/admin/menu/:id
GET  /api/admin/analytics
POST /api/admin/backup
POST /api/admin/restore
```

### Banco de Dados Sugerido:
```sql
-- Tabela de usuários admin
CREATE TABLE admin_users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE,
    password_hash VARCHAR(255),
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de contatos
CREATE TABLE contacts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de newsletter
CREATE TABLE newsletter (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) UNIQUE,
    status ENUM('active', 'unsubscribed'),
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de eventos
CREATE TABLE events (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200),
    description TEXT,
    event_date DATE,
    event_time TIME,
    price DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 📱 Responsividade

O painel admin é totalmente responsivo:
- Desktop: Layout completo com sidebar
- Tablet: Layout adaptado
- Mobile: Menu hambúrguer e layout vertical

## 🔧 Manutenção

### Fazer Backup Regular:
1. Acesse "Configurações"
2. Clique em "Fazer Backup"
3. Salve o arquivo JSON em local seguro

### Restaurar Backup:
1. Acesse "Configurações"
2. Clique em "Restaurar Backup"
3. Selecione o arquivo JSON
4. Confirme a restauração

## ⚠️ Avisos Importantes

1. **localStorage tem limite de ~5-10MB** - Para produção, use banco de dados
2. **Dados podem ser perdidos** se o usuário limpar o cache do navegador
3. **Não é seguro para produção** sem backend adequado
4. **Credenciais estão no código** - Implemente autenticação real
5. **Sem criptografia** - Dados ficam visíveis no localStorage

## 🆘 Suporte

Para dúvidas ou problemas:
- E-mail: contato@ihopso.com.br
- Consulte a documentação completa no README.md principal

---

**Desenvolvido para I HOP SO Pub & Bar** 🍺
