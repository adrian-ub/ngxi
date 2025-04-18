import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCrownAIcon],svg[mage-crown-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.349 5.18L16.11 8.317l-3.196-4.382a1.027 1.027 0 0 0-1.83 0L7.89 8.318L4.65 5.18a1.028 1.028 0 0 0-1.901.504v9.802a5.14 5.14 0 0 0 5.139 5.139h8.222a5.14 5.14 0 0 0 5.139-5.14V5.684a1.028 1.028 0 0 0-1.901-.504M8 16.513h8"></svg:path>`,
})
export class MageCrownAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
