import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotonePermMediaIcon],svg[ic-twotone-perm-media-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.17 6l-.59-.59L11.17 4H6v12h16V6zm4.33 4.5L21 15H7l4.5-6l3.5 4.51z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2zm5 9h14l-3.5-4.5l-2.5 3.01L11.5 9zM22 4h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 12H6V4h5.17l1.41 1.41l.59.59H22z"></svg:path>`,
})
export class IcTwotonePermMediaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
