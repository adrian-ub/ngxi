import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laHouseDamageIcon],svg[la-house-damage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2.59l-.72.69l-13 13l1.44 1.44L5 16.44V28h8.83L16 22h-3.62l3.63-6.21L16 20h3.55l-1.61 8H27V16.44l1.28 1.28l1.44-1.44l-13-13zm0 2.85l9 9V26h-4.62L22 18h-4v-6h-2.1L10 22.11V24h3.15l-.72 2H7V14.44z"></svg:path>`,
})
export class LaHouseDamageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
