import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmBluetoothConnectedIcon],svg[charm-bluetooth-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 11.25L12.25 5l-4.5-3.25v12.5l4.5-3.25l-8.5-6.25M1.75 8h1.5m9.5 0h1.5"></svg:path>`,
})
export class CharmBluetoothConnectedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
