# 💬 Botão Flutuante do WhatsApp

## 📱 Configuração

O botão flutuante do WhatsApp está implementado e pronto para uso!

## 🔧 Como Configurar o Número

### Passo 1: Editar o HTML

Abra o arquivo `index.html` e localize o botão do WhatsApp (próximo ao final do arquivo):

```html
<a href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20I%20HOP%20SO" 
   class="whatsapp-float" 
   target="_blank">
```

### Passo 2: Substituir o Número

Substitua `5511999999999` pelo seu número no formato internacional:

**Formato:** `55` (Brasil) + `DDD` + `Número`

**Exemplos:**
- São Paulo: `5511999999999`
- Rio de Janeiro: `5521999999999`
- Belo Horizonte: `5531999999999`

### Passo 3: Personalizar a Mensagem (Opcional)

Você pode alterar a mensagem inicial que aparece quando o cliente clica:

```
?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20I%20HOP%20SO
```

**Dicas:**
- Use `%20` para espaços
- Use `%0A` para quebra de linha
- Mantenha a mensagem curta e objetiva

**Exemplos de Mensagens:**

1. **Reserva:**
```
?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva
```

2. **Cardápio:**
```
?text=Olá!%20Gostaria%20de%20ver%20o%20cardápio%20completo
```

3. **Evento:**
```
?text=Olá!%20Gostaria%20de%20informações%20sobre%20os%20eventos
```

4. **Delivery:**
```
?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20para%20delivery
```

## 🎨 Características do Botão

### Visual
- ✅ Cor verde oficial do WhatsApp (#25D366)
- ✅ Ícone Font Awesome em alta definição
- ✅ Sombra suave com efeito verde
- ✅ Formato circular (60x60px)

### Posicionamento
- ✅ Fixo no canto inferior direito
- ✅ Acima do botão "Voltar ao Topo"
- ✅ Sempre visível ao rolar a página
- ✅ Z-index alto (1000) - sempre no topo

### Animações
1. **Pulso Contínuo**
   - Sombra pulsa a cada 2 segundos
   - Chama atenção do visitante
   - Efeito sutil e profissional

2. **Shake (Balanço)**
   - Ícone balança suavemente
   - Movimento de -10° a +10°
   - Convida à interação

3. **Hover (Passar o Mouse)**
   - Cor muda para verde escuro (#128C7E)
   - Botão aumenta 10%
   - Sombra intensifica

## 📱 Responsividade

### Desktop
- Tamanho: 60x60px
- Posição: 100px do fundo, 30px da direita
- Ícone: 2rem

### Mobile (480px)
- Tamanho: 55x55px
- Posição: 80px do fundo, 20px da direita
- Ícone: 1.8rem
- Ajustado para não sobrepor outros elementos

## 🎯 Funcionalidades

### 1. **Link Direto**
- Abre o WhatsApp automaticamente
- Desktop: WhatsApp Web
- Mobile: App do WhatsApp

### 2. **Mensagem Pré-definida**
- Cliente não precisa digitar
- Facilita o primeiro contato
- Aumenta taxa de conversão

### 3. **Nova Aba**
- `target="_blank"` - Abre em nova aba
- Não fecha o site
- Melhor experiência do usuário

### 4. **Acessibilidade**
- `aria-label` - Leitores de tela
- `title` - Tooltip ao passar o mouse
- `rel="noopener noreferrer"` - Segurança

## 📊 Benefícios

### Para o Negócio
- ✅ Aumenta conversões
- ✅ Facilita contato direto
- ✅ Reduz barreiras de comunicação
- ✅ Disponível 24/7
- ✅ Cliente não precisa procurar telefone

### Para o Cliente
- ✅ Contato instantâneo
- ✅ Não precisa ligar
- ✅ Pode enviar fotos/vídeos
- ✅ Histórico de conversas
- ✅ Resposta rápida

## 🔄 Integração com Admin

Para gerenciar o número do WhatsApp pelo painel admin:

### 1. Adicionar no localStorage
```javascript
const siteInfo = {
    whatsapp: '5511999999999',
    whatsappMessage: 'Olá! Gostaria de mais informações'
};
localStorage.setItem('ihopso_site_info', JSON.stringify(siteInfo));
```

### 2. Carregar Dinamicamente
```javascript
function loadWhatsAppButton() {
    const siteInfo = JSON.parse(localStorage.getItem('ihopso_site_info') || '{}');
    if (siteInfo.whatsapp) {
        const whatsappBtn = document.querySelector('.whatsapp-float');
        const message = encodeURIComponent(siteInfo.whatsappMessage || 'Olá!');
        whatsappBtn.href = `https://wa.me/${siteInfo.whatsapp}?text=${message}`;
    }
}
```

## 🎨 Customização de Cores

### Manter Verde Padrão (Recomendado)
```css
.whatsapp-float {
    background: #25D366; /* Verde WhatsApp */
}

.whatsapp-float:hover {
    background: #128C7E; /* Verde escuro */
}
```

### Usar Cores do Site
```css
.whatsapp-float {
    background: var(--primary-color); /* Verde do site */
}

.whatsapp-float:hover {
    background: var(--green-light);
}
```

## 📏 Ajustar Tamanho

### Maior (70x70px)
```css
.whatsapp-float {
    width: 70px;
    height: 70px;
    font-size: 2.5rem;
}
```

### Menor (50x50px)
```css
.whatsapp-float {
    width: 50px;
    height: 50px;
    font-size: 1.8rem;
}
```

## 🔊 Adicionar Som (Opcional)

Para adicionar um som de notificação:

```javascript
const whatsappBtn = document.querySelector('.whatsapp-float');
const notificationSound = new Audio('sounds/notification.mp3');

whatsappBtn.addEventListener('mouseenter', () => {
    notificationSound.play();
});
```

## 📱 Testar o Botão

### No Desktop
1. Clique no botão
2. Deve abrir WhatsApp Web
3. Número e mensagem devem aparecer

### No Mobile
1. Toque no botão
2. Deve abrir o app WhatsApp
3. Conversa deve iniciar automaticamente

## 🚫 Desabilitar Animações (Opcional)

Se preferir um botão mais discreto:

```css
.whatsapp-float {
    animation: none; /* Remove pulso */
}

.whatsapp-float i {
    animation: none; /* Remove shake */
}
```

## 📊 Estatísticas

Para rastrear cliques no botão:

```javascript
document.querySelector('.whatsapp-float').addEventListener('click', () => {
    // Google Analytics
    gtag('event', 'click', {
        'event_category': 'WhatsApp',
        'event_label': 'Float Button'
    });
    
    // Ou salvar no localStorage
    const clicks = parseInt(localStorage.getItem('whatsapp_clicks') || '0');
    localStorage.setItem('whatsapp_clicks', clicks + 1);
});
```

## ⚠️ Importante

### Número Válido
- ✅ Use número com DDD
- ✅ Formato internacional (55...)
- ✅ Sem espaços ou caracteres especiais
- ❌ Não use 0 antes do DDD

### Mensagem
- ✅ Curta e objetiva
- ✅ Use codificação URL (%20 para espaço)
- ✅ Personalize para seu negócio
- ❌ Não use mensagens muito longas

### Horário de Atendimento
Considere adicionar um aviso sobre horário:
```html
<span class="whatsapp-status">Online</span>
```

## 🔗 Links Úteis

- **API WhatsApp**: https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat
- **Codificador URL**: https://www.urlencoder.org/
- **Testar Link**: Cole o link no navegador para testar

---

**Implementado para I HOP SO Pub & Bar** 🍺

**Última atualização**: Novembro 2024
