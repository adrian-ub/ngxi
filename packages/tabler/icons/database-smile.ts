import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDatabaseSmileIcon],svg[tabler-database-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 14h.01M14 14h.01M10 17a3.5 3.5 0 0 0 4 0M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3s-3.582-3-8-3s-8 1.343-8 3"></svg:path><svg:path d="M4 6v12c0 1.657 3.582 3 8 3s8-1.343 8-3V6"></svg:path></svg:g>`,
})
export class TablerDatabaseSmileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
