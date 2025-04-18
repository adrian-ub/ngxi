import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBluetoothIcon],svg[icon-park-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 13L34 34L23 44V4L34 14L12 35"></svg:path>`,
})
export class IconParkBluetoothIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
