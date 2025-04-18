import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGrid3x3Icon],svg[tabler-grid-3x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8h18M3 16h18M8 3v18m8-18v18"></svg:path>`,
})
export class TablerGrid3x3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
