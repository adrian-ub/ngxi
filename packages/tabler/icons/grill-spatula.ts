import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGrillSpatulaIcon],svg[tabler-grill-spatula-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10.2 10.2l6.3 6.3m2.847.075l1.08 1.079a1.96 1.96 0 0 1-2.773 2.772l-1.08-1.079a1.96 1.96 0 0 1 2.773-2.772M3 7l3.05 3.15a2.9 2.9 0 0 0 4.1-4.1L7 3z"></svg:path>`,
})
export class TablerGrillSpatulaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
