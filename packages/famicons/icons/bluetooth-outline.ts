import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsBluetoothOutlineIcon],svg[famicons-bluetooth-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m144 352l224-192L256 48v416l112-112l-224-192"></svg:path>`,
})
export class FamiconsBluetoothOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
