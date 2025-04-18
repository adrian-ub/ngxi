import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrengthOffIcon],svg[mdi-network-strength-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 1l-8.6 8.6l8.6 8.59M4.77 4.5L3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73"></svg:path>`,
})
export class MdiNetworkStrengthOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
