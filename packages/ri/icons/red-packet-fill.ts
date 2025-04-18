import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRedPacketFillIcon],svg[ri-red-packet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.005 5.94a12 12 0 0 1-6.806 3.863a2.5 2.5 0 0 0-4.388 0A12 12 0 0 1 3.005 5.94V3.003a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm0 2.787v12.276a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V8.727a13.95 13.95 0 0 0 6.63 3.076a2.501 2.501 0 0 0 4.739 0a13.95 13.95 0 0 0 6.63-3.076"></svg:path>`,
})
export class RiRedPacketFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
