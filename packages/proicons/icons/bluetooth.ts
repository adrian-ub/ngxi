import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBluetoothIcon],svg[proicons-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6.25 7.5l5.454 4.5m0 0l5.246 3.982a.65.65 0 0 1 0 1.036l-4.202 3.19a.65.65 0 0 1-1.043-.517V4.31a.65.65 0 0 1 1.043-.518l4.202 3.19a.65.65 0 0 1 0 1.036zm0 0L6.25 16.5"></svg:path>`,
})
export class ProiconsBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
