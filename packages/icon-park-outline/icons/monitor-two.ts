import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMonitorTwoIcon],svg[icon-park-outline-monitor-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42.5 16.387a20 20 0 0 0-4-6.162A19.94 19.94 0 0 0 24 4C12.954 4 4 12.954 4 24h10l5 8l9-18l7 10h9c0 11.046-8.954 20-20 20c-5.45 0-10.392-2.18-14-5.717A20 20 0 0 1 5.664 32"></svg:path>`,
})
export class IconParkOutlineMonitorTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
