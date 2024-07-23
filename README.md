# Rapidgo - Frontend

## Descripción del Proyecto
**Nombre del Proyecto**: Rapidgo - Frontend
**Propósito**: Crear el frontend para el website de Rapidgo, una aplicación de delivery.

## Requisitos Previos
- **Node.js**: Necesitarás tener Node.js instalado en tu máquina.
  
  Puedes verificar la versión de Node.js instalada con:
  ```bash
  node -v

- **npm**: Necesitarás tener npm instalado en tu máquina.
  
  Puedes verificar la versión de npm instalada con:
  ```bash
  npm -v
  ```

## Instrucciones de Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/joshuayherrera/rapidgo.git
   cd rapidgo/frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Instrucciones para Ejecutar el Proyecto
1. Para iniciar el servidor de desarrollo, usa el siguiente comando:
   ```bash
   npm run dev
   ```

## Estructura del Proyecto
```js
rapidgo/frontend
├── node_modules/
├── public/
├── src/
│   ├── api/
│   │   └── MyUserApi.tsx
│   ├── assets/
│   ├── auth/
│   │   └── Auth0ProviderWithNavigate.tsx
│   ├── components/
│   │   └── ui/
│   │       └── button.tsx
│   │       └── dopdown-menu.tsx
│   │       └── form.tsx
│   │       └── input.tsx
│   │       └── label.tsx
│   │       └── separator.tsx
│   │       └── sheet.tsx
│   │   └── Footer.tsx
│   │   └── Header.tsx
│   │   └── Hero.tsx
│   │   └── LoadingButton.tsx
│   │   └── MainNav.tsx
│   │   └── MovileNav.tsx
│   │   └── MovileNavLink.tsx
│   │   └── UsernameMenu.tsx
│   ├── forms/
│   │   └── user-profile-form/
│   │        └── UserProfileForm.tsx
│   ├── layouts/
│   │   └── layout.tsx
│   ├── lib/
│   │   └── util.ts
│   ├── pages/
│   │   └── AuthCallbackPage.tsx
│   │   └── HomePage.tsx
│   │   └── UserProfilePage.tsx
│   ├── AppRoutes.tsx
│   ├── global.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env
├── .eslintrc.cjs
├── .gitignore
├── components.json
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Contribución
Los colaboradores pueden contribuir al proyecto enviando pull requests. Sigue estos pasos para contribuir:

1. Fork del Repositorio: Haz un fork del repositorio en tu cuenta de GitHub.

2. Clona tu Fork: Clona tu fork a tu máquina local.
   ```bash
   git clone https://github.com/tu-usuario/rapidgo.git
   cd rapidgo/frontend
   ```

3. Crea una Rama: Crea una nueva rama para tu feature o arreglo de bug.
   ```bash
   git checkout -b nombre-de-tu-rama
   ```

4. Haz tus Cambios: Realiza los cambios necesarios en tu rama.

5. Ejecuta el Linter: Asegúrate de que tu código sigue las reglas de estilo ejecutando el linter.
   ```bash
   npm run lint
   ```

6. Realiza Commit de tus Cambios: Haz commit de tus cambios con un mensaje descriptivo.
   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   ```

7. Sube tus Cambios: Empuja tus cambios a tu fork en GitHub.
   ```bash
   git push origin nombre-de-tu-rama
   ```

8. Crea un Pull Request: Ve a la página de tu fork en GitHub y crea un nuevo pull request.
```
