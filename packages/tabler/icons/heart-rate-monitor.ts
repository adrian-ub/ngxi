import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHeartRateMonitorIcon],svg[tabler-heart-rate-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm4 15h10m-8-4v4m6-4v4"></svg:path><svg:path d="M7 10h2l2 3l2-6l1 3h3"></svg:path></svg:g>`,
})
export class TablerHeartRateMonitorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
