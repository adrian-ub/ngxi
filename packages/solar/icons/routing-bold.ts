import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRoutingBoldIcon],svg[solar-routing-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 4.25a4.25 4.25 0 0 1 0 8.5h-9a2.75 2.75 0 1 0 0 5.5h10.69l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H7.5a4.25 4.25 0 0 1 0-8.5h9a2.75 2.75 0 1 0 0-5.5H7.855a2 2 0 1 1 0-1.5z"></svg:path>`,
})
export class SolarRoutingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
