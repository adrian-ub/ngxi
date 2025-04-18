import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBluetoothIcon],svg[pixelarticons-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3h-2v2h2v2h2v2h-2v2h2V9h2V7h-2V5h-2zm-2 0h-2v6H9V7H7V5H5v2h2v2h2v2h2v2H9v2H7v2H5v2h2v-2h2v-2h2v6h2zm2 8h-2v2h2v2h2v2h-2v2h-2v2h2v-2h2v-2h2v-2h-2v-2h-2z"></svg:path>`,
})
export class PixelarticonsBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
