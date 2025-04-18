import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMonitorFill16Icon],svg[garden-monitor-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="16" height="11" rx="1" ry="1"></svg:rect><svg:path d="M11.5 16h-7l-.4-.2a.5.5 0 0 1-.1-.4a4 4 0 0 1 7.9 0a.5.5 0 0 1-.1.4z"></svg:path></svg:g>`,
})
export class GardenMonitorFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
