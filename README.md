# Convocatorias Colmayor

Boletín de convocatorias (export estático con Next.js).

## Desarrollo

```bash
npm install
npm run dev
```

## Crear el repositorio en GitHub y subir el código

Desde Cursor no se puede iniciar sesión en tu cuenta; hazlo en **tu PC**:

1. Instala [GitHub CLI](https://cli.github.com/) si no lo tienes (`winget install GitHub.cli`).
2. En PowerShell:
   ```powershell
   gh auth login
   ```
   (GitHub.com → HTTPS → autenticación por navegador.)
3. En la carpeta del proyecto:
   ```powershell
   .\scripts\crear-repo-y-subir.ps1
   ```

Eso crea el repo `convocatorias-colmayor` (público) si no existe y ejecuta `git push -u origin master`.

## Sitio publicado (GitHub Pages)

En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**. Tras el primer workflow correcto, la URL será:

**https://julian8811.github.io/convocatorias-colmayor/**

La ruta base `/convocatorias-colmayor` está definida en `next.config.mjs` para producción.
