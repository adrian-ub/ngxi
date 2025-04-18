import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTrafficConeOffIcon],svg[tabler-traffic-cone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h16M9.4 10h.6m4 0h.6m-6.8 5H15m-9 5L9.5 9.5m1-3L11 5h2l2 6m2 6l1 3M3 3l18 18"></svg:path>`,
})
export class TablerTrafficConeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
