import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNetworkStrengthOffOutlineIcon],svg[mdi-network-strength-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 1l-8.6 8.6l1.45 1.45L19 5.83v10.36l2 2M4.77 4.5L3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73M11.33 13.6l5.4 5.4H6"></svg:path>`,
})
export class MdiNetworkStrengthOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
