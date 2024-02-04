# Perfect React - Template

A ideia desse repositório e ser uma template utilizando as melhores técnologias atuais para iniciar um novo projeto de pequeno a grande escala.

### Dependencias de Produção

- **Zod** - Para validar formulários e gerar tipagem no desenvolvimento
- **Tailwind-variants** - Para criação de componentes personalizados

### Dependencias de Desenvolvimento

- **Eslint** - Para monitorar e auxiliar em padrões de código no desenvolvimento
- **Tailwind** - Para trabalhar com estilização de páginas e componentes com alta velocidade
- **Prettier** - Para trabalhar com estilização de páginas e componentes com alta velocidade
- **Prettier-plugin-tailwindcss** - Para organizar automaticamente a order das classes do Tailwind

## Arquitetura de Pastas:

<table>
  <tr>
    <td valign="center">

      📁 src
        📁 app
          📁 login
            📄 page.tsx
        📁 assets
          📁 icons
            🖼️ cat.png
          📁 images
            🖼️ bg.jpg
        📁 components
          📁 ui
            📁 buttons
              📄 Button.tsx
            📁 inputs
              📄 InputText.tsx
        📁 styles
          🎨 globals.css
        📁 contexts
          📄 ThemeContext.tsx

  </td>
  <td valign="top">

- **/app** - paginas do site
- **/assets** - imagens e icones
- **/components** - button, inputs, cards
- **/styles** - arquivo de estilização global
- **/contexts** - gerenciador de estados

  </td>
  </tr>
  </table>
