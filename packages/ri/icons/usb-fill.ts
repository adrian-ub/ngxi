import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUsbFillIcon],svg[ri-usb-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l3 5h-2v7.381l3-1.499l-.001-.882H15V7h4v4h-1.001L18 13.118l-5 2.5v1.553A3.001 3.001 0 0 1 12 23a3 3 0 0 1-1.31-5.7L6 14l-.001-2.268a2 2 0 1 1 2.001 0V13l3 2.086V6H9z"></svg:path>`,
})
export class RiUsbFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
