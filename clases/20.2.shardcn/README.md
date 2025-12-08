# Formulario con shadcn/ui

Aplicación de demostración construida con React, Vite, Tailwind CSS y componentes de shadcn/ui. Permite editar los datos de una persona (nombre, apellido y teléfono) con una vista previa de la información guardada.

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Instalación y uso

```bash
npm install       # instala dependencias
npm run dev       # inicia el servidor en modo desarrollo
npm run build     # genera la versión de producción
npm run preview   # previsualiza la build
```

## Componentes clave

- `src/components/ui/*`: adaptaciones de los componentes base de shadcn/ui (`Button`, `Input`, `Label`, `Card`).
- `src/App.jsx`: formulario controlado con estado local y vista previa de los datos guardados.
- `tailwind.config.cjs` y `src/index.css`: configuración de Tailwind y del sistema de variables usado por shadcn/ui.

## Alias de imports

Se puede importar usando `@/` para referenciar directamente `src/`, gracias a la configuración en `vite.config.js` y `tsconfig.json`.
