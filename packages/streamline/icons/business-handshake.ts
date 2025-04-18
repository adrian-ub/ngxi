import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessHandshakeIcon],svg[streamline-business-handshake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m.548 3.085l2.194 1.18l1.96-.338a2.23 2.23 0 0 1 1.844.515v0m4.736 4.84L8.18 11.486a2 2 0 0 1-2.285.022L.548 7.863"></svg:path><svg:path d="m13.402 7.84l-2.195 1.5l-3.406-2.75l-1.253.911a1.17 1.17 0 0 1-1.609-.226v0a1.17 1.17 0 0 1 .169-1.613l1.305-1.097a3 3 0 0 1 2.25-.688l2.033.218l2.706-1.463"></svg:path><svg:path d="M7.801 6.597c.82.73 1.982.357 2.414-.239"></svg:path></svg:g>`,
})
export class StreamlineBusinessHandshakeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
