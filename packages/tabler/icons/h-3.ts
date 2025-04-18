import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerH3Icon],svg[tabler-h-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14a2 2 0 1 0-2-2m0 4a2 2 0 1 0 2-2M4 6v12m8-12v12m-1 0h2M3 18h2m-1-6h8M3 6h2m6 0h2"></svg:path>`,
})
export class TablerH3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
