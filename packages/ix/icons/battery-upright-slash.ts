import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightSlashIcon],svg[ix-battery-upright-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m89.751 59.52l38.247 38.25v-.02l42.666 42.666v.021l170.667 170.667v-.021l42.667 42.666l68.42 68.438l-30.17 30.17l-38.25-38.256l.002 55.232H128l-.002-311.232L59.581 89.69zm80.913 141.248l.002 225.899h170.667l-.002-55.232zM309.333 42.667l-.002 42.666H384l-.002 208.086l-42.667-42.667l.002-122.752H218.558l-42.667-42.667h26.773l.002-42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightSlashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
