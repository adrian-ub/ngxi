import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDatabaseIcon],svg[tabler-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 6a8 3 0 1 0 16 0A8 3 0 1 0 4 6"></svg:path><svg:path d="M4 6v6a8 3 0 0 0 16 0V6"></svg:path><svg:path d="M4 12v6a8 3 0 0 0 16 0v-6"></svg:path></svg:g>`,
})
export class TablerDatabaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
