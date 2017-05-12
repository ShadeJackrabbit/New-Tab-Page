$files = Get-ChildItem . -exclude *.json,*.ps1 | % { ($_.name)}
$out = $files -join '", "'
'[ "'+$out+'"]' | Out-File .\index.json
