import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMonitorStroke12Icon],svg[garden-monitor-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="11" height="7" x=".5" y=".5" rx=".5" ry=".5"></svg:rect><svg:path stroke-linecap="round" d="M8.5 11.5a2.56 2.56 0 0 0-5 0"></svg:path></svg:g>`,
})
export class GardenMonitorStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
