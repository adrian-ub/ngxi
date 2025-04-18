import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsTrafficBarrierIcon],svg[bxs-traffic-barrier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-2V3h-2v3H7V3H5v3H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v6h2v-6h10v6h2v-6h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1M4.42 13l2.857-5H9.58l-2.857 5zm7.857-5h2.303l-2.857 5H9.42zm5 0h2.303l-2.857 5H14.42z"></svg:path>`,
})
export class BxsTrafficBarrierIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
