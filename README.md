# Portafolio Digital - Edwin Guevara VR2

Portafolio digital profesional para GitHub Pages.

## Estructura del proyecto

```text
Portafolio_Edwin_GitHub_VR2/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── assets/
│   └── LEEME_assets.txt
├── README.md
└── .gitignore
```

## Cómo subir a GitHub

1. Crea un repositorio nuevo en GitHub.
2. Descomprime este ZIP.
3. Entra a la carpeta `Portafolio_Edwin_GitHub_VR2`.
4. Sube estos archivos y carpetas:
   - `index.html`
   - `css`
   - `js`
   - `assets`
   - `README.md`
   - `.gitignore`

Importante: `index.html` debe quedar en la raíz del repositorio.

## Activar GitHub Pages

1. Ve a `Settings`.
2. Entra a `Pages`.
3. En `Source`, elige `Deploy from a branch`.
4. En `Branch`, selecciona `main`.
5. En carpeta, selecciona `/root`.
6. Guarda.

Tu enlace tendrá una forma parecida a:

```text
https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/
```

## Editar foto

1. Guarda tu foto como:
   `assets/foto-perfil.jpg`
2. Abre `index.html`.
3. Busca:
   `ZONA EDITABLE: FOTO DE PERFIL`
4. Activa la línea `<img ...>` indicada y elimina el SVG si deseas.

## Editar CV y certificados

1. Coloca tus PDF dentro de `assets`.
2. Abre `index.html`.
3. Busca:
   `ZONA EDITABLE: CV Y CERTIFICADOS`
4. Cambia los enlaces `href`.

## Editar colores y fondos

1. Abre `css/styles.css`.
2. Busca:
   - `ZONA EDITABLE: TEMA PRINCIPAL DEL PORTAFOLIO`
   - `ZONA EDITABLE: FONDO GENERAL DEL PORTAFOLIO`
   - `ZONA EDITABLE: FONDO DE LA TARJETA PRINCIPAL`

## Guardar como PDF

1. Abre el portafolio en Chrome o Edge.
2. Presiona `Ctrl + P`.
3. Destino: `Guardar como PDF`.
4. Tamaño: `A4`.
5. Escala recomendada: `90%` o `100%`.
