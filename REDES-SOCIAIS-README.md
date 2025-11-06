# 📱 Configuração de Redes Sociais

## 🔗 Links Configurados

Os links das redes sociais estão localizados no rodapé do site (`index.html`, linha ~493).

## 📝 Como Configurar Seus Links

### 1. **Facebook**

**Link Atual:**
```html
<a href="https://www.facebook.com/ihopso" target="_blank">
```

**Como Alterar:**
1. Acesse sua página do Facebook
2. Copie o nome de usuário da URL
   - Exemplo: `https://www.facebook.com/SEU_USUARIO`
3. Substitua `ihopso` pelo seu usuário

**Formatos Aceitos:**
- Página: `https://www.facebook.com/nomedapagina`
- Perfil: `https://www.facebook.com/profile.php?id=123456789`
- Página com ID: `https://www.facebook.com/pages/Nome-da-Pagina/123456789`

---

### 2. **Instagram**

**Link Atual:**
```html
<a href="https://www.instagram.com/ihopso" target="_blank">
```

**Como Alterar:**
1. Acesse seu perfil do Instagram
2. Copie o nome de usuário (sem @)
   - Exemplo: Se seu perfil é `@ihopso_pub`, use `ihopso_pub`
3. Substitua `ihopso` pelo seu usuário

**Formato:**
```
https://www.instagram.com/SEU_USUARIO
```

---

### 3. **Twitter/X**

**Link Atual:**
```html
<a href="https://twitter.com/ihopso" target="_blank">
```

**Como Alterar:**
1. Acesse seu perfil do Twitter/X
2. Copie o nome de usuário (sem @)
3. Substitua `ihopso` pelo seu usuário

**Formatos Aceitos:**
- Twitter: `https://twitter.com/SEU_USUARIO`
- X (novo): `https://x.com/SEU_USUARIO`

---

### 4. **WhatsApp**

**Link Atual:**
```html
<a href="https://wa.me/5542998550101" target="_blank">
```

**Como Alterar:**
1. Use o formato internacional: `55` + `DDD` + `Número`
2. Exemplo: `5542998550101`

**Formato:**
```
https://wa.me/55DDNUMERO
```

**Com Mensagem Pré-definida:**
```
https://wa.me/5542998550101?text=Olá!%20Vim%20pelo%20site
```

---

## 🎯 Localização no Código

### Arquivo: `index.html`
**Linha aproximada:** 493-497

```html
<div class="social-links">
    <a href="https://www.facebook.com/ihopso" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-facebook-f"></i>
    </a>
    <a href="https://www.instagram.com/ihopso" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram"></i>
    </a>
    <a href="https://twitter.com/ihopso" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-x-twitter"></i>
    </a>
    <a href="https://wa.me/5542998550101" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-whatsapp"></i>
    </a>
</div>
```

---

## ➕ Adicionar Outras Redes Sociais

### YouTube
```html
<a href="https://www.youtube.com/@SEU_CANAL" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube">
    <i class="fab fa-youtube"></i>
</a>
```

### TikTok
```html
<a href="https://www.tiktok.com/@SEU_USUARIO" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok">
    <i class="fab fa-tiktok"></i>
</a>
```

### LinkedIn
```html
<a href="https://www.linkedin.com/company/SUA_EMPRESA" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
    <i class="fab fa-linkedin-in"></i>
</a>
```

### Spotify
```html
<a href="https://open.spotify.com/user/SEU_USUARIO" target="_blank" rel="noopener noreferrer" aria-label="Spotify" title="Spotify">
    <i class="fab fa-spotify"></i>
</a>
```

---

## 🔒 Atributos Importantes

### `target="_blank"`
- Abre o link em uma nova aba
- Não fecha o site

### `rel="noopener noreferrer"`
- **Segurança**: Previne vulnerabilidades
- **Privacidade**: Não envia informações de referência
- **Obrigatório** quando usar `target="_blank"`

### `aria-label` e `title`
- **Acessibilidade**: Leitores de tela
- **UX**: Tooltip ao passar o mouse

---

## 🎨 Personalizar Ordem dos Ícones

Para alterar a ordem, basta reorganizar os links:

```html
<div class="social-links">
    <!-- Instagram primeiro -->
    <a href="https://www.instagram.com/ihopso">...</a>
    
    <!-- Facebook segundo -->
    <a href="https://www.facebook.com/ihopso">...</a>
    
    <!-- WhatsApp terceiro -->
    <a href="https://wa.me/5542998550101">...</a>
    
    <!-- Twitter por último -->
    <a href="https://twitter.com/ihopso">...</a>
</div>
```

---

## 🚫 Remover Redes Sociais

Para remover uma rede social que você não usa:

1. Localize a linha do link
2. Delete ou comente:

```html
<!-- Comentado - não aparece no site
<a href="https://twitter.com/ihopso">
    <i class="fab fa-x-twitter"></i>
</a>
-->
```

---

## ✅ Verificar Links

### Teste Cada Link:
1. Salve o arquivo
2. Atualize o site
3. Clique em cada ícone
4. Verifique se abre a página correta

### Checklist:
- ✅ Link abre em nova aba
- ✅ Direciona para a página correta
- ✅ Ícone está visível
- ✅ Hover funciona (muda de cor)

---

## 📊 Rastrear Cliques (Opcional)

Para saber quantas pessoas clicam nos seus links:

### Google Analytics
```html
<a href="https://www.facebook.com/ihopso" 
   onclick="gtag('event', 'click', {'event_category': 'Social', 'event_label': 'Facebook'});">
```

### Salvar no localStorage
```javascript
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', function() {
        const social = this.getAttribute('aria-label');
        const clicks = parseInt(localStorage.getItem(`social_${social}`) || '0');
        localStorage.setItem(`social_${social}`, clicks + 1);
    });
});
```

---

## 🎯 Dicas de Boas Práticas

### 1. **Use URLs Curtas**
- ✅ `facebook.com/ihopso`
- ❌ `facebook.com/pages/I-HOP-SO-Pub-Bar/123456789012345`

### 2. **Mantenha Consistência**
- Use o mesmo nome de usuário em todas as redes
- Exemplo: `@ihopso` em todas

### 3. **Atualize Regularmente**
- Verifique se os links ainda funcionam
- Atualize se mudar de perfil

### 4. **Priorize as Mais Usadas**
- Coloque primeiro as redes onde você é mais ativo
- Remova as que não usa

---

## 🔄 Integração com Admin (Futuro)

Para gerenciar pelo painel admin:

```javascript
// Salvar no localStorage
const socialLinks = {
    facebook: 'https://www.facebook.com/ihopso',
    instagram: 'https://www.instagram.com/ihopso',
    twitter: 'https://twitter.com/ihopso',
    whatsapp: 'https://wa.me/5542998550101'
};
localStorage.setItem('ihopso_social', JSON.stringify(socialLinks));

// Carregar dinamicamente
function loadSocialLinks() {
    const social = JSON.parse(localStorage.getItem('ihopso_social') || '{}');
    if (social.facebook) {
        document.querySelector('a[aria-label="Facebook"]').href = social.facebook;
    }
    // Repetir para outras redes...
}
```

---

## 📱 Exemplo Completo Configurado

```html
<div class="social-links">
    <!-- Facebook - Página do Pub -->
    <a href="https://www.facebook.com/ihopsopub" 
       target="_blank" 
       rel="noopener noreferrer" 
       aria-label="Facebook" 
       title="Siga-nos no Facebook">
        <i class="fab fa-facebook-f"></i>
    </a>
    
    <!-- Instagram - Perfil Principal -->
    <a href="https://www.instagram.com/ihopso.pub" 
       target="_blank" 
       rel="noopener noreferrer" 
       aria-label="Instagram" 
       title="Siga-nos no Instagram">
        <i class="fab fa-instagram"></i>
    </a>
    
    <!-- Twitter/X -->
    <a href="https://x.com/ihopsopub" 
       target="_blank" 
       rel="noopener noreferrer" 
       aria-label="Twitter" 
       title="Siga-nos no Twitter">
        <i class="fab fa-x-twitter"></i>
    </a>
    
    <!-- WhatsApp - Contato Direto -->
    <a href="https://wa.me/5542998550101?text=Olá!%20Vim%20pelo%20site%20do%20I%20HOP%20SO" 
       target="_blank" 
       rel="noopener noreferrer" 
       aria-label="WhatsApp" 
       title="Fale conosco no WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>
</div>
```

---

## 🆘 Problemas Comuns

### Link não funciona
- ✅ Verifique se a URL está correta
- ✅ Teste a URL diretamente no navegador
- ✅ Certifique-se de ter `https://`

### Ícone não aparece
- ✅ Verifique se Font Awesome está carregado
- ✅ Confirme a classe do ícone (`fab fa-facebook-f`)

### Abre na mesma aba
- ✅ Adicione `target="_blank"`

### Erro de segurança
- ✅ Adicione `rel="noopener noreferrer"`

---

**Desenvolvido para I HOP SO Pub & Bar** 🍺

**Última atualização**: Novembro 2024
