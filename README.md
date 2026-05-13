# IKER PARFUM DE ROIS

Catalogo web responsive para un negocio de perfumes arabes, de disenador y nicho.

## Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Datos locales, sin Firebase ni backend
- Deploy listo para Vercel

## Instalacion local

```bash
npm install
npm run dev
```

## Variables de entorno

Copia `.env.example` a `.env` si quieres cambiar el numero de WhatsApp localmente:

```bash
VITE_WHATSAPP_NUMBER=51987905831
```

En Vercel agrega esa misma variable en:

```txt
Project Settings > Environment Variables
```

## Editar productos

La lista inicial de perfumes esta en:

```txt
src/data/perfumes.js
```

Cada producto usa esta forma:

```js
{
  id: '1',
  name: 'Nombre del perfume',
  price: 120,
  description: 'Descripcion breve',
  imageUrl: '/perfumes/nombre-del-archivo.webp',
  notes: { top: 'Salida', heart: 'Corazon', base: 'Fondo' },
  longevity: '8-12 horas',
  intensity: 4,
  occasion: 'Dia, Noche',
  categories: ['arabes'],
  visible: true,
}
```

Categorias disponibles para la seccion de coleccion:

```txt
arabes
disenador
nicho
```

Un perfume puede aparecer en mas de una seccion:

```js
categories: ['arabes', 'nicho']
```

## Imagenes reales

Coloca las fotos en:

```txt
public/perfumes/
```

Recomendado:
- Usar `.webp` o `.jpg`
- 900 a 1200 px de ancho
- Menos de 250 KB por imagen
- Nombres sin espacios: `oud-imperial.webp`

Luego apunta el producto asi:

```js
imageUrl: '/perfumes/oud-imperial.webp'
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Subir a GitHub

```bash
git init
git add .
git commit -m "Initial IKER PARFUM DE ROIS site"
git branch -M main
git remote add origin https://github.com/USUARIO/NOMBRE-DEL-REPO.git
git push -u origin main
```

No se deben subir `node_modules`, `dist` ni `.env`; ya estan cubiertos por `.gitignore`.

## Deploy en Vercel

1. Importa el repositorio desde Vercel.
2. Framework Preset: `Vite`.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Agrega `VITE_WHATSAPP_NUMBER` si quieres controlar el numero desde Vercel.
6. Deploy.
