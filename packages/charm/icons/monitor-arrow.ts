import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmMonitorArrowIcon],svg[charm-monitor-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.2 7.75v3.5H1.7v-9.5h6.5M4.75 14.2h6.5M8 11.7v2.5m1.75-7.95l4.5-4.5m-3.5-.5h4v4"></svg:path>`,
})
export class CharmMonitorArrowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
