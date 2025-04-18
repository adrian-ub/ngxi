import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBluetoothIcon],svg[tdesign-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 .255l7.453 6.707L13.414 12l5.039 5.038L11 23.745v-9.33l-4 4L5.586 17l5-5l-5-5L7 5.586l4 4zm2 14.16v4.84l2.548-2.293zm0-4.83l2.548-2.547L13 4.745z"></svg:path>`,
})
export class TdesignBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
