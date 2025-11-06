# 🔄 Integração Admin ↔ Site Principal

## 📋 Como Funciona

O sistema agora está **totalmente integrado**! As alterações feitas no painel administrativo aparecem automaticamente na página principal.

## 🎯 Dados Gerenciáveis

### 1. **Eventos** 📅
- **Onde gerenciar**: Painel Admin → Eventos
- **O que aparece**: Seção "Eventos" da página principal
- **Dados salvos**: `ihopso_events`

#### Estrutura de um Evento:
```json
{
  "id": 1,
  "title": "Música ao Vivo",
  "description": "Banda local com o melhor do rock",
  "date": "2024-12-15",
  "time": "21:00",
  "price": "Entrada Gratuita",
  "image": "images/event1.jpg"
}
```

### 2. **Cardápio** 🍺
- **Onde gerenciar**: Painel Admin → Cardápio
- **O que aparece**: Seção "Nosso Cardápio" da página principal
- **Dados salvos**: `ihopso_menu`

#### Categorias Disponíveis:
- `beers` - Cervejas
- `drinks` - Drinks
- `pizzas` - Pizzas
- `porções` - Porções

#### Estrutura de um Item:
```json
{
  "id": 1,
  "name": "IPA Artesanal",
  "description": "Cerveja com amargor equilibrado",
  "price": 18.00
}
```

### 3. **Informações do Site** ℹ️
- **Onde gerenciar**: Painel Admin → Configurações
- **O que aparece**: Rodapé e seção de contato
- **Dados salvos**: `ihopso_site_info`

#### Campos Editáveis:
- `phone` - Telefone
- `email` - E-mail
- `address` - Endereço
- `hours` - Horário de funcionamento

### 4. **Contatos** 📧
- **Onde visualizar**: Painel Admin → Contatos
- **Origem**: Formulário de contato da página
- **Dados salvos**: `ihopso_contacts`

### 5. **Newsletter** 📰
- **Onde visualizar**: Painel Admin → Newsletter
- **Origem**: Formulário de inscrição da página
- **Dados salvos**: `ihopso_newsletter`

## 🔧 Como Usar

### Passo 1: Acessar o Admin
1. Clique no botão **🔐 Admin** no canto superior direito
2. Faça login com as credenciais:
   - Usuário: `admin`
   - Senha: `ihopso2024`

### Passo 2: Gerenciar Conteúdo

#### Para Adicionar um Evento:
1. Vá em **Eventos** no menu lateral
2. Clique em **Adicionar Evento**
3. Preencha os dados:
   - Título
   - Descrição
   - Data
   - Horário
   - Preço
   - Imagem (opcional)
4. Clique em **Salvar**
5. **Atualize a página principal** para ver o evento

#### Para Adicionar Item ao Cardápio:
1. Vá em **Cardápio** no menu lateral
2. Selecione a categoria (Cervejas, Drinks, Pizzas, Porções)
3. Clique em **Adicionar Item**
4. Preencha:
   - Nome do item
   - Descrição
   - Preço
5. Clique em **Salvar**
6. **Atualize a página principal** para ver o item

#### Para Editar Informações do Site:
1. Vá em **Configurações** no menu lateral
2. Edite os campos desejados:
   - Telefone
   - E-mail
   - Endereço
   - Horário de funcionamento
3. Clique em **Salvar Alterações**
4. **Atualize a página principal** para ver as mudanças

## 🔄 Atualização Automática

### Como os Dados Aparecem na Página:

1. **Ao carregar a página**, o JavaScript executa:
   ```javascript
   loadDynamicEvents();    // Carrega eventos
   loadDynamicMenu();      // Carrega cardápio
   loadSiteInfo();         // Carrega informações
   ```

2. **Os dados são buscados** do `localStorage`

3. **O HTML é gerado dinamicamente** e inserido na página

4. **Resultado**: Conteúdo sempre atualizado!

## 💾 Armazenamento

Todos os dados são salvos no **localStorage** do navegador:

| Chave | Conteúdo |
|-------|----------|
| `ihopso_events` | Lista de eventos |
| `ihopso_menu` | Cardápio completo |
| `ihopso_site_info` | Informações do site |
| `ihopso_contacts` | Mensagens de contato |
| `ihopso_newsletter` | Inscritos na newsletter |
| `ihopso_activities` | Log de atividades |
| `ihopso_visits` | Contador de visitas |

## 📦 Backup e Restauração

### Fazer Backup:
1. Acesse **Configurações** no admin
2. Clique em **📥 Fazer Backup**
3. Um arquivo JSON será baixado com todos os dados

### Restaurar Backup:
1. Acesse **Configurações** no admin
2. Clique em **📤 Restaurar Backup**
3. Selecione o arquivo JSON do backup
4. Confirme a restauração

## ⚠️ Importante

### Dados Iniciais
Na primeira vez que você acessar, o sistema cria dados de exemplo:
- 2 eventos padrão
- Itens de cardápio em todas as categorias
- Informações básicas do site

### Limpeza de Dados
- Para remover os dados de exemplo, use o painel admin
- Você pode deletar itens individualmente
- Ou limpar tudo de uma vez (Zona de Perigo)

### Sincronização
- Os dados são salvos **localmente** no navegador
- Se limpar o cache/cookies, os dados serão perdidos
- **Faça backups regulares!**

## 🚀 Fluxo de Trabalho Recomendado

1. **Acesse o Admin** (🔐 botão no header)
2. **Faça as alterações** desejadas
3. **Salve** as mudanças
4. **Atualize a página principal** (F5)
5. **Verifique** se as alterações apareceram
6. **Faça backup** periodicamente

## 🔍 Solução de Problemas

### As alterações não aparecem?
1. ✅ Certifique-se de ter salvado no admin
2. ✅ Atualize a página principal (Ctrl + F5)
3. ✅ Verifique o console do navegador (F12)
4. ✅ Confirme que o JavaScript está habilitado

### Dados sumiram?
1. ✅ Verifique se não limpou o cache do navegador
2. ✅ Restaure o último backup
3. ✅ Recrie os dados manualmente

### Erro ao salvar?
1. ✅ Verifique se todos os campos obrigatórios estão preenchidos
2. ✅ Confirme que está logado no admin
3. ✅ Tente fazer logout e login novamente

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique este README
2. Consulte o `README-ADMIN.md`
3. Verifique o console do navegador (F12)

---

**Sistema desenvolvido para I HOP SO Pub & Bar** 🍺

**Última atualização**: Novembro 2024
