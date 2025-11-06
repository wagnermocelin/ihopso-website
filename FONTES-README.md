# 📝 Guia de Instalação das Fontes Chivus e Spiritu

## 🎨 Fontes Utilizadas no I HOP SO

O site utiliza duas fontes customizadas:
- **Chivus** - Para títulos, logos e destaques
- **Spiritu** - Para corpo de texto e parágrafos

## 📦 Fontes Atuais (Temporárias)

Atualmente o site está usando fontes similares do Google Fonts:
- **Bebas Neue** (similar à Chivus) - Fonte display/decorativa
- **Montserrat** (similar à Spiritu) - Fonte sans-serif moderna

## 🔧 Como Adicionar as Fontes Originais

### Passo 1: Obter os Arquivos de Fonte

Você precisa dos arquivos das fontes Chivus e Spiritu nos formatos:
- `.woff2` (formato moderno, recomendado)
- `.woff` (fallback)
- `.ttf` ou `.otf` (opcional, para compatibilidade)

### Passo 2: Criar a Pasta de Fontes

```
PAGINA I HOP SO/
├── fonts/
│   ├── Chivus-Regular.woff2
│   ├── Chivus-Regular.woff
│   ├── Chivus-Bold.woff2
│   ├── Chivus-Bold.woff
│   ├── Spiritu-Regular.woff2
│   ├── Spiritu-Regular.woff
│   ├── Spiritu-Medium.woff2
│   ├── Spiritu-Medium.woff
│   ├── Spiritu-Bold.woff2
│   └── Spiritu-Bold.woff
```

### Passo 3: Atualizar o arquivo `fonts.css`

Abra o arquivo `fonts.css` e **descomente** as declarações `@font-face`:

```css
/* Remova os comentários /* */ das seções abaixo: */

@font-face {
    font-family: 'Chivus';
    src: url('fonts/Chivus-Regular.woff2') format('woff2'),
         url('fonts/Chivus-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Chivus';
    src: url('fonts/Chivus-Bold.woff2') format('woff2'),
         url('fonts/Chivus-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Spiritu';
    src: url('fonts/Spiritu-Regular.woff2') format('woff2'),
         url('fonts/Spiritu-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Spiritu';
    src: url('fonts/Spiritu-Medium.woff2') format('woff2'),
         url('fonts/Spiritu-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Spiritu';
    src: url('fonts/Spiritu-Bold.woff2') format('woff2'),
         url('fonts/Spiritu-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}
```

### Passo 4: Atualizar as Variáveis CSS

No mesmo arquivo `fonts.css`, atualize as variáveis:

```css
:root {
    /* Substitua as fontes fallback pelas originais */
    --font-display: 'Chivus', 'Bebas Neue', sans-serif;
    --font-body: 'Spiritu', 'Montserrat', sans-serif;
}
```

### Passo 5: Testar

1. Abra o site no navegador
2. Pressione `Ctrl + Shift + R` (ou `Cmd + Shift + R` no Mac) para limpar o cache
3. Verifique se as fontes estão carregando corretamente

## 🔍 Como Verificar se as Fontes Estão Funcionando

### No Chrome/Edge:
1. Clique com botão direito em qualquer texto
2. Selecione "Inspecionar"
3. Na aba "Computed", procure por "font-family"
4. Deve mostrar "Chivus" ou "Spiritu"

### No Firefox:
1. Clique com botão direito em qualquer texto
2. Selecione "Inspecionar Elemento"
3. Na aba "Fontes", veja quais fontes estão sendo usadas

## 📍 Onde as Fontes São Aplicadas

### Chivus (Fonte Display)
- ✅ Logo "I HOP SO"
- ✅ Título principal do hero
- ✅ Títulos de seções (h2)
- ✅ Subtítulos (h3, h4)
- ✅ Títulos de cards e itens do menu
- ✅ Títulos de eventos
- ✅ Títulos do footer

### Spiritu (Fonte Corpo)
- ✅ Todo o texto do corpo
- ✅ Parágrafos
- ✅ Descrições
- ✅ Formulários
- ✅ Botões
- ✅ Links de navegação

## 🎯 Otimizações Implementadas

- ✅ `font-display: swap` - Evita FOIT (Flash of Invisible Text)
- ✅ Preconnect para Google Fonts
- ✅ Fontes fallback similares
- ✅ Formato WOFF2 para melhor compressão
- ✅ Variáveis CSS para fácil manutenção

## 🔗 Onde Encontrar as Fontes

Se você não tem os arquivos das fontes Chivus e Spiritu:

1. **Verifique com o designer** que criou a identidade visual
2. **Procure no Notion** do projeto (link fornecido)
3. **Entre em contato** com quem forneceu as especificações
4. **Alternativa:** Continue usando Bebas Neue e Montserrat (já configuradas)

## ⚠️ Licenciamento

Certifique-se de que você tem a licença apropriada para usar as fontes Chivus e Spiritu em um site comercial. Algumas fontes requerem licenças específicas para uso web.

## 🆘 Problemas Comuns

### Fontes não aparecem
- Verifique se os arquivos estão na pasta `/fonts/`
- Confirme que os nomes dos arquivos estão corretos
- Limpe o cache do navegador

### Fontes aparecem diferentes
- Verifique se descomentou as declarações `@font-face`
- Confirme que atualizou as variáveis CSS
- Verifique se os pesos (font-weight) estão corretos

### Performance lenta
- Use apenas os pesos necessários
- Prefira WOFF2 sobre outros formatos
- Considere usar `font-display: swap`

---

**Desenvolvido para I HOP SO Pub & Bar** 🍺
