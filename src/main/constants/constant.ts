export const POWERSHELL_CMD = 'start powershell -noexit -command "[console]::windowwidth=80; [console]::windowheight=35; [console]::bufferwidth=[console]::windowwidth; cd .\\platform-tools; Get-Content -Raw ..\\resources\\assets\\art.txt; Write-Host "Run ADB commands here" -nonewline; Write-Host "`n";Write-Host "Ex: .\\adb COMMAND"; Write-Host "`n""';

export const TERMINAL_CMD = 'open -a Terminal /Applications/"Android Toolkit.app"/Contents/platform-tools';
