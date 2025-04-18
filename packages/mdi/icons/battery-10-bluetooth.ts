import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBattery10BluetoothIcon],svg[mdi-battery-10-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2v2H3.33A1.33 1.33 0 0 0 2 5.33v15.34C2 21.4 2.6 22 3.33 22h9.34c.73 0 1.33-.6 1.33-1.33V5.33A1.33 1.33 0 0 0 12.67 4H11V2zM4 6h8v12H4zm15 2v3.79L16.71 9.5l-.71.71L18.79 13L16 15.79l.71.71L19 14.21V18h.5l2.85-2.86L20.21 13l2.14-2.15L19.5 8zm1 1.91l.94.94l-.94.94zm0 4.3l.94.93l-.94.94z"></svg:path>`,
})
export class MdiBattery10BluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
