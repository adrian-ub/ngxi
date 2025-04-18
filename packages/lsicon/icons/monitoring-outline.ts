import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMonitoringOutlineIcon],svg[lsicon-monitoring-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5 14.5h3m0 0V13m0 1.5h3M8 13A6 6 0 1 1 8 1a6 6 0 0 1 0 12ZM5 7a3 3 0 1 0 6 0a3 3 0 0 0-6 0Zm3-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z"></svg:path>`,
})
export class LsiconMonitoringOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
