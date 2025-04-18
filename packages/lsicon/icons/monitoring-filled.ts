import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMonitoringFilledIcon],svg[lsicon-monitoring-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M1.5 7a6.5 6.5 0 1 1 7 6.481V14H11v1H5v-1h2.5v-.519A6.5 6.5 0 0 1 1.5 7M8 1.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11"></svg:path><svg:path d="M4.5 7a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M8 4.5a2.5 2.5 0 1 0 2.436 1.935a1.5 1.5 0 1 1-1.871-1.87A2.5 2.5 0 0 0 8 4.5"></svg:path></svg:g>`,
})
export class LsiconMonitoringFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
