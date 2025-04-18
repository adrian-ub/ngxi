import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBluetoothSearchingIcon],svg[streamline-bluetooth-searching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 9.5L8.5 4L4.5.5v13l4-3.5L1 4.5m11.033-1c1.9 1.9 1.9 5 0 6.9M10.5 5.305c.859.859.859 2.33 0 3.19"></svg:path>`,
})
export class StreamlineBluetoothSearchingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
