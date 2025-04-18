import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRoutingOutlineIcon],svg[solar-routing-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 3.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M3.25 5a2.75 2.75 0 0 1 5.396-.75H16.5a4.25 4.25 0 0 1 0 8.5h-9a2.75 2.75 0 1 0 0 5.5h10.69l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H7.5a4.25 4.25 0 0 1 0-8.5h9a2.75 2.75 0 1 0 0-5.5H8.646A2.751 2.751 0 0 1 3.25 5" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoutingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
