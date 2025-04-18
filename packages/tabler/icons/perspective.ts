import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPerspectiveIcon],svg[tabler-perspective-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.141 4.163l12 1.714a1 1 0 0 1 .859.99v10.266a1 1 0 0 1-.859.99l-12 1.714A1 1 0 0 1 5 18.847V5.153a1 1 0 0 1 1.141-.99"></svg:path>`,
})
export class TablerPerspectiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
