import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBatteryThreeQuarterIcon],svg[ix-battery-three-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 128v74.666h42.667v106.667h-42.667V384h-384V128zM384 170.667H85.334v170.666H384zM298.667 192v128h-192V192z"></svg:path>`,
})
export class IxBatteryThreeQuarterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
