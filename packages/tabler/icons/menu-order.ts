import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMenuOrderIcon],svg[tabler-menu-order-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16M4 14h16M9 18l3 3l3-3M9 6l3-3l3 3"></svg:path>`,
})
export class TablerMenuOrderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
