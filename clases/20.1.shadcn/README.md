# Proyecto React + Vite + shadcn/ui + Tailwind CSS

Este proyecto está configurado con React, Vite, shadcn/ui y Tailwind CSS.

## 🚀 Características

- ⚡ **Vite** - Herramientas de desarrollo rápidas
- ⚛️ **React** - Biblioteca de interfaz de usuario
- 🎨 **Tailwind CSS v4** - Framework de CSS utilitario
- 🧩 **shadcn/ui** - Componentes de UI reutilizables y personalizables
- 📦 **TypeScript** - Soporte completo para TypeScript

## 📋 Requisitos previos

- Node.js (versión 18 o superior)
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
cd 20.1.shadcn
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173` (o el puerto que se muestre en la terminal)

## 🎨 Uso de shadcn/ui

### Agregar nuevos componentes

Para agregar componentes de shadcn/ui a tu proyecto:

```bash
npx shadcn@latest add [nombre-del-componente]
```

Ejemplos:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add dialog
```

### Usar componentes en tu código

```jsx
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function MiComponente() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mi Tarjeta</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Haz clic aquí</Button>
      </CardContent>
    </Card>
  )
}
```

## 🎭 Temas

El proyecto está configurado con soporte para temas claro y oscuro usando CSS variables. Puedes alternar entre temas agregando/removiendo la clase `dark` del elemento `html`.

## 📁 Estructura del proyecto

```
src/
├── components/
│   └── ui/                 # Componentes de shadcn/ui
├── lib/
│   └── utils.ts           # Utilidades (función cn para clases)
├── assets/                # Recursos estáticos
├── App.jsx               # Componente principal
├── main.jsx             # Punto de entrada
└── index.css           # Estilos globales y variables CSS
```

## 🛠️ Configuración

### Alias de importación
El proyecto está configurado con el alias `@` que apunta a la carpeta `src/`:

```jsx
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

### Tailwind CSS
Tailwind CSS v4 está configurado con todas las variables CSS necesarias para los componentes de shadcn/ui.

### TypeScript
El proyecto tiene soporte completo para TypeScript con configuración optimizada para React y Vite.

## 📝 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la aplicación construida
- `npm run lint` - Ejecuta ESLint

## 🎨 Personalización

### Colores
Los colores del tema se pueden personalizar modificando las variables CSS en `src/index.css`.

### Componentes
Los componentes de shadcn/ui están diseñados para ser personalizables. Puedes modificar los archivos en `src/components/ui/` según tus necesidades.

## 📚 Recursos

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/) (incluido con shadcn/ui)+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
