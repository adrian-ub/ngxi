import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightFullIcon],svg[ix-battery-upright-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 85.333h74.666l.001-42.666h106.666v42.666H384v384H128zM170.667 128v298.667h170.666V128zM192 149.333h128v256H192z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightFullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
