import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMonitorIcon],svg[picon-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4V3h1v1M1 4V3h1v1m1 1v1h1V5m1 0q0 2-1.5 2Q0 6 5 2M1 7h6l1-2c0-7-8-7-8 0m3-4h1v1H3"></svg:path>`,
})
export class PiconMonitorIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
