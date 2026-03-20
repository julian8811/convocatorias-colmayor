# Subir Convocatorias Colmayor a GitHub
# Necesitas un Token: https://github.com/settings/tokens (permiso: repo)

$token = Read-Host "Pega tu Token de GitHub"
if (-not $token) { Write-Host "Cancelado."; exit 1 }

$headers = @{ "Authorization" = "token $token"; "Accept" = "application/vnd.github.v3+json" }
$body = '{"name":"convocatorias-colmayor","description":"Convocatorias nacionales e internacionales - Colmayor","private":false}'

Write-Host "Creando repositorio..."
try {
    Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method Post -Headers $headers -Body $body -ContentType "application/json" | Out-Null
    Write-Host "Repositorio creado." -ForegroundColor Green
} catch {
    if ($_.Exception.Message -match "422") { Write-Host "El repo ya existe, continuando..." }
    else { Write-Host "Error: $_"; exit 1 }
}

Set-Location $PSScriptRoot
git remote remove origin 2>$null
git remote add origin "https://julian8811:$token@github.com/julian8811/convocatorias-colmayor.git"
git push -u origin master
git remote set-url origin "https://github.com/julian8811/convocatorias-colmayor.git"
Write-Host "Listo: https://github.com/julian8811/convocatorias-colmayor" -ForegroundColor Cyan
