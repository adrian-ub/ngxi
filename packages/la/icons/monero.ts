import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laMoneroIcon],svg[la-monero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11c0 1.04-.156 2.045-.428 3H22v-8.023l-6 6.285l-6-6.285V19H5.428A11 11 0 0 1 5 16C5 9.935 9.935 5 16 5m-4 10.969l4 4.187l4-4.187V21h5.785c-1.825 3.556-5.521 6-9.785 6s-7.96-2.444-9.785-6H12z"></svg:path>`,
})
export class LaMoneroIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
