import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMonitorFill12Icon],svg[garden-monitor-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="12" height="8" rx="1" ry="1"></svg:rect><svg:path d="M6 9a3 3 0 0 0-2.9 2.4a.5.5 0 0 0 .5.6h4.8a.5.5 0 0 0 .5-.6A3 3 0 0 0 6 9"></svg:path></svg:g>`,
})
export class GardenMonitorFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
