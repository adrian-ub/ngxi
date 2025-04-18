import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideDatabaseBackupIcon],svg[lucide-database-backup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:ellipse cx="12" cy="5" rx="9" ry="3"></svg:ellipse><svg:path d="M3 12a9 3 0 0 0 5 2.69M21 9.3V5"></svg:path><svg:path d="M3 5v14a9 3 0 0 0 6.47 2.88M12 12v4h4"></svg:path><svg:path d="M13 20a5 5 0 0 0 9-3a4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"></svg:path></svg:g>`,
})
export class LucideDatabaseBackupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
