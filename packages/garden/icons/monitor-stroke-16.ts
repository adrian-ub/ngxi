import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMonitorStroke16Icon],svg[garden-monitor-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="15" height="10" x=".5" y=".5" rx=".5" ry=".5"></svg:rect><svg:path stroke-linecap="round" d="M11.5 15.5a3.54 3.54 0 0 0-7 0"></svg:path></svg:g>`,
})
export class GardenMonitorStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
