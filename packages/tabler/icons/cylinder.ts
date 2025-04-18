import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCylinderIcon],svg[tabler-cylinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 6a7 3 0 1 0 14 0A7 3 0 1 0 5 6"></svg:path><svg:path d="M5 6v12c0 1.657 3.134 3 7 3s7-1.343 7-3V6"></svg:path></svg:g>`,
})
export class TablerCylinderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
