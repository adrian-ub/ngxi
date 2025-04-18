import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmMonitorIcon],svg[charm-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 1.75h12.5v9.5H1.75zm3 12.5h6.5M8 11.75v2.5"></svg:path>`,
})
export class CharmMonitorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
