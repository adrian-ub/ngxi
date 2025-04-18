import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsBluetoothIcon],svg[zondicons-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.41 0l6 6l-4 4l4 4l-6 6H9v-7.59l-3.3 3.3l-1.4-1.42L8.58 10l-4.3-4.3L5.7 4.3L9 7.58V0zM11 4.41V7.6L12.59 6zM12.59 14L11 12.41v3.18z"></svg:path>`,
})
export class ZondiconsBluetoothIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
