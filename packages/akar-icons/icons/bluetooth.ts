import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsBluetoothIcon],svg[akar-icons-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 7l12 10l-6 5V2l6 5L5 17"></svg:path>`,
})
export class AkarIconsBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
