import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightExclamationIcon],svg[ix-battery-upright-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M309.333 42.667v42.666H384v384H128v-384h74.667V42.667zm32 85.333H170.667v298.667h170.666zM256 341.333c17.664 0 32 14.328 32 32s-14.336 32-32 32s-32-14.327-32-32c0-17.672 14.336-32 32-32m21.333-192v165.334h-42.666V149.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightExclamationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
