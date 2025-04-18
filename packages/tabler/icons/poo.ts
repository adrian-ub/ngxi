import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPooIcon],svg[tabler-poo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 12h.01M14 12h.01M10 16a3.5 3.5 0 0 0 4 0"></svg:path><svg:path d="M11 4c2 0 3.5 1.5 3.5 4h.164a2.5 2.5 0 0 1 2.196 3.32a3 3 0 0 1 1.615 3.063a3 3 0 0 1-1.299 5.607H7a3 3 0 0 1-1.474-5.613a3 3 0 0 1 1.615-3.062a2.5 2.5 0 0 1 2.195-3.32H9.5c1.5 0 2.5-2 1.5-4z"></svg:path></svg:g>`,
})
export class TablerPooIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
