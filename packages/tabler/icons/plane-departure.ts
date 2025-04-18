import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlaneDepartureIcon],svg[tabler-plane-departure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.639 10.258l4.83-1.294a2 2 0 1 1 1.035 3.863L6.015 16.71l-4.45-5.02l2.897-.776l2.45 1.414l2.897-.776l-3.743-6.244l2.898-.777zM3 21h18"></svg:path>`,
})
export class TablerPlaneDepartureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
