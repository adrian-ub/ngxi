import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBluetoothIcon],svg[picon-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5.5L1 2h1l6 3.5L5 8H4V0h1l3 2.5L2 6H1l6-3.5L5 1v6"></svg:path>`,
})
export class PiconBluetoothIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
