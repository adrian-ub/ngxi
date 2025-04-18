import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDatabaseExportIcon],svg[tabler-database-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3s-3.582-3-8-3s-8 1.343-8 3"></svg:path><svg:path d="M4 6v6c0 1.657 3.582 3 8 3c1.118 0 2.183-.086 3.15-.241M20 12V6"></svg:path><svg:path d="M4 12v6c0 1.657 3.582 3 8 3q.235 0 .466-.005M16 19h6m-3-3l3 3l-3 3"></svg:path></svg:g>`,
})
export class TablerDatabaseExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
