$ErrorActionPreference = "Stop"

$patterns = @(".DS_Store", "Thumbs.db", "*.tmp", "*.bak", "*.rs.bk")
$deleted = 0

foreach ($pattern in $patterns) {
    Get-ChildItem -Path . -Recurse -File -Filter $pattern -ErrorAction SilentlyContinue |
        Where-Object { $_.FullName -notmatch '\\.git\\' } |
        ForEach-Object {
            Write-Host "Deleting $($_.FullName)"
            Remove-Item -LiteralPath $_.FullName -Force
            $deleted++
        }
}

# Cargo.lock should not be versioned in this workspace.
Get-ChildItem -Path .\katas -Recurse -File -Filter "Cargo.lock" -ErrorAction SilentlyContinue |
    ForEach-Object {
        Write-Host "Deleting $($_.FullName)"
        Remove-Item -LiteralPath $_.FullName -Force
        $deleted++
    }

Write-Host "Cleanup done: $deleted file(s) removed."
