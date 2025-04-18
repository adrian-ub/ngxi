import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCrownBIcon],svg[mage-crown-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.349 5.255l-3.238 3.11l-3.196-4.354a1.027 1.027 0 0 0-1.83 0L7.89 8.366L4.65 5.255a1.028 1.028 0 0 0-1.901.503l1.593 11.203a4.11 4.11 0 0 0 4.111 3.587h7.195a4.11 4.11 0 0 0 4.11-3.587L21.25 5.758a1.028 1.028 0 0 0-1.901-.503M8 16.447h8"></svg:path>`,
})
export class MageCrownBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
