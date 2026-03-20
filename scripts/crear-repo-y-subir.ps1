# Ejecutar UNA VEZ en tu PC (PowerShell), desde la raíz del proyecto o cualquier sitio:
#   1) gh auth login    (elige GitHub.com, HTTPS, autenticación por navegador)
#   2) .\scripts\crear-repo-y-subir.ps1
#
# Crea https://github.com/<tu-usuario>/convocatorias-colmayor si no existe y hace push de master.

$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
Set-Location $root

gh auth status *> $null
if ($LASTEXITCODE -ne 0) {
  Write-Host "Primero inicia sesión en GitHub CLI:" -ForegroundColor Yellow
  Write-Host "  gh auth login" -ForegroundColor Cyan
  exit 1
}

$repo = "convocatorias-colmayor"
gh repo view $repo *> $null
if ($LASTEXITCODE -ne 0) {
  Write-Host "Creando repositorio $repo (público)..." -ForegroundColor Green
  gh repo create $repo --public --description "Boletín de convocatorias (Next.js, export estático)"
} else {
  Write-Host "El repositorio $repo ya existe." -ForegroundColor Green
}

Write-Host "Subiendo rama master..." -ForegroundColor Green
git push -u origin master
if ($LASTEXITCODE -eq 0) {
  Write-Host ""
  Write-Host "Listo. Activa GitHub Pages: Repo → Settings → Pages → Source: GitHub Actions" -ForegroundColor Cyan
  Write-Host "URL del sitio: https://$(gh api user -q .login).github.io/$repo/" -ForegroundColor Cyan
}
