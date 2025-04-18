import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineBluetoothDisabledIcon],svg[ic-outline-bluetooth-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 5.83l1.88 1.88l-1.6 1.6l1.41 1.41l3.02-3.02L12 2h-1v5.03l2 2zM5.41 4L4 5.41L10.59 12L5 17.59L6.41 19L11 14.41V22h1l4.29-4.29l2.3 2.29L20 18.59zM13 18.17v-3.76l1.88 1.88z"></svg:path>`,
})
export class IcOutlineBluetoothDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
