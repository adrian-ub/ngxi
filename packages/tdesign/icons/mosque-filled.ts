import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMosqueFilledIcon],svg[tdesign-mosque-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.004 2.002l-2-.004L11 3.083a6.005 6.005 0 0 0-4.919 4.92h11.835A6.005 6.005 0 0 0 13 3.083zM22 10H2v2h1v10h5v-6h8v6h5V12h1z"></svg:path><svg:path fill="currentColor" d="M10 22v-4h4v4z"></svg:path>`,
})
export class TdesignMosqueFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
