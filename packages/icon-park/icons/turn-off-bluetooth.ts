import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTurnOffBluetoothIcon],svg[icon-park-turn-off-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M20.6719 11.7778V4L35.2563 15.1111L28.0771 19.5556M32.4996 35.9744L20.6751 44V29.6275L32.4996 35.9744Z"></svg:path><svg:path d="M4 12.5L44 35.5"></svg:path><svg:path stroke-linejoin="round" d="M7.44434 33.9999L20.6751 29.6274"></svg:path></svg:g>`,
})
export class IconParkTurnOffBluetoothIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
