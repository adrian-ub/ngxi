import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherBluetoothIcon],svg[feather-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.5 6.5l11 11L12 23V1l5.5 5.5l-11 11"></svg:path>`,
})
export class FeatherBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
