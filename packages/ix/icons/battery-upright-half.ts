import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightHalfIcon],svg[ix-battery-upright-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 85.333h74.666l.001-42.666h106.666v42.666H384v384H128zM170.667 128v298.667h170.666V128zM192 277.333h128v128H192z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightHalfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
