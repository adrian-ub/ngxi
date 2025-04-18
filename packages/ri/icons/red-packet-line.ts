import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRedPacketLineIcon],svg[ri-red-packet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.178 9.766a10 10 0 0 0 4.827-2.622V4.003h-14v3.141a10 10 0 0 0 4.827 2.622a2.5 2.5 0 0 1 4.346 0m.208 2a2.501 2.501 0 0 1-4.762 0a11.9 11.9 0 0 1-4.62-2.015v10.252h14V9.75a11.9 11.9 0 0 1-4.618 2.016M4.005 2.004h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-18a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiRedPacketLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
