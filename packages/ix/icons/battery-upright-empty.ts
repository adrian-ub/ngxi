import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightEmptyIcon],svg[ix-battery-upright-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128.001 85.333h74.666V42.667h106.667v42.666h74.667v384h-256zM170.667 128v298.667h170.667V128z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
