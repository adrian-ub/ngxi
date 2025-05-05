import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightChargeIcon],svg[ix-battery-upright-charge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 85.333V42.667h-85.334v42.666H128v384h256v-384zm-128 42.667h170.666v298.667H170.667zM320 256h-53.333l32-106.667L192 298.667h53.333l-32 106.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightChargeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
