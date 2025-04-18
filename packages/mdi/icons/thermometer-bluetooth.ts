import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerBluetoothIcon],svg[mdi-thermometer-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13V5c0-1.66-1.34-3-3-3S5 3.34 5 5v8c-2.21 1.66-2.66 4.79-1 7s4.79 2.66 7 1s2.66-4.79 1-7a4.7 4.7 0 0 0-1-1M8 4c.55 0 1 .45 1 1v3H7V5c0-.55.45-1 1-1m10 4v3.79L15.71 9.5l-.71.71L17.79 13L15 15.79l.71.71L18 14.21V18h.5l2.85-2.86L19.21 13l2.14-2.15L18.5 8zm1 1.91l.94.94l-.94.94zm0 4.3l.94.93l-.94.94z"></svg:path>`,
})
export class MdiThermometerBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
