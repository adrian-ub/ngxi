import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBluetoothIcon],svg[streamline-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.25 9.5l7.5-5.5l-4-3.5v13l4-3.5l-7.5-5.5"></svg:path>`,
})
export class StreamlineBluetoothIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
