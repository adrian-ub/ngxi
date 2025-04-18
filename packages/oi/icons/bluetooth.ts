import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiBluetoothIcon],svg[oi-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 0v2.5l-.75-.75L1 2.5L2.5 4L1 5.5l.75.75l.75-.75V8H3l3.5-2.5l-2.25-1.53L6.5 2.5L3 0zm1 1.5l1.5 1l-1.5 1zm0 3l1.5 1l-1.5 1z"></svg:path>`,
})
export class OiBluetoothIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
