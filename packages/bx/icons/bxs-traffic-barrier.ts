import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsTrafficBarrierIcon],svg[bx-bxs-traffic-barrier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21 6h-2V3h-2v3H7V3H5v3H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v6h2v-6h10v6h2v-6h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM4.42 13l2.857-5H9.58l-2.857 5H4.42zm7.857-5h2.303l-2.857 5H9.42l2.857-5zm5 0h2.303l-2.857 5H14.42l2.857-5z" fill="currentColor"></svg:path>`,
})
export class BxBxsTrafficBarrierIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
