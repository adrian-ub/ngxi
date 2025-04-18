import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmBluetoothSlashIcon],svg[charm-bluetooth-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.75 6.25L12.25 5l-4.5-3.25v2.5m4.5 6.75l-4.5 3.25v-6l-4 3m-2-8l12.5 9"></svg:path>`,
})
export class CharmBluetoothSlashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
