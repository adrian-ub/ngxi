import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineQuickreplyIcon],svg[ic-outline-quickreply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17.17V4h16v6h2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9v-2H5.17z"></svg:path><svg:path fill="currentColor" d="M22.5 16h-2.2l1.7-4h-5v6h2v5z"></svg:path>`,
})
export class IcOutlineQuickreplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
