import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneQuickreplyIcon],svg[ic-twotone-quickreply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v13.17L5.17 16H15v-6h5V4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5.17 16L4 17.17V4h16v6h2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9v-2z"></svg:path><svg:path fill="currentColor" d="m19 23l3.5-7h-2.2l1.7-4h-5v6h2z"></svg:path>`,
})
export class IcTwotoneQuickreplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
