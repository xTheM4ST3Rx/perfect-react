# Perfect React - Template

A ideia desse repositório e ser uma template utilizando as melhores técnologias atuais para iniciar um novo projeto de pequeno a grande escala.

### Dependencias de Produção

- **Zod** - Para validar formulários e gerar tipagem no desenvolvimento
- **React-hook-form** - Criação de formularios sem verbosidade
- **Tailwind-variants** - Para criação de componentes personalizados
- **React-router-dom** - Para criação de rotas da aplicação

### Dependencias de Desenvolvimento

- **Eslint** - Para monitorar e auxiliar em padrões de código no desenvolvimento
- **Husky** - Para testar e verificar o código antes de ser enviado para o git
- **Tailwind** - Para trabalhar com estilização de páginas e componentes com alta velocidade
- **Prettier** - Para trabalhar com estilização de páginas e componentes com alta velocidade
- **Prettier-plugin-tailwindcss** - Para organizar automaticamente a order das classes do Tailwind

## Arquitetura de Pastas:

<table>
  <tr>
    <td valign="center">
      
      🐾 husky
      📁 src
        📁 pages
          📄 LoginPage.tsx
          📄 ConfigPage.tsx
          📄 HomePage.tsx
        📁 router
          🛣️ PrivateRoute.tsx
          🛣️ PublicRoute.tsx
        📁 common
          📁 types
            📄 userTypes.tsx
            📄 productTypes.tsx
        📁 assets
          📁 icons
            🖼️ cat.png
          📁 images
            🖼️ bg.jpg
        📁 components
          📁 ui
            📁 buttons
              🧱 Button.tsx
            📁 inputs
              🧱 InputText.tsx
        📁 services
          📁 auth
            ⚙️ authService.ts
          📁 products
            ⚙️ productsService.ts
          📄 apiService.ts
        📁 styles
          🎨 globals.css
        📁 contexts
          🧠 ThemeContext.tsx
        📁 hooks
          🎣 useFetch.tsx
        📁 tests
          📁 unit
          📁 integration
        📄 App.tsx
        📄 main.tsx

  </td>
  <td valign="top">

- **/pages** - paginas do site
- **/router** - verificação de rotas
- **/assets** - imagens, icones, fontes
- **/components** - button, inputs, cards
- **/common/types** - tipagens para o projeto
- **/services** - serviços de api com o backend
- **/styles** - arquivo de estilização global
- **/contexts** - gerenciador de estados
- **/hooks** - hooks personalizados
- **/tests** - criação de testes do projeto

  </td>
  </tr>
  </table>
