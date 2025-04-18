import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentViewDesktop20FilledIcon],svg[fluent-view-desktop-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.962 4.5a1.5 1.5 0 0 1 1.5-1.5h12.94a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H12v2.015h1.499a.5.5 0 0 1 0 1h-7a.5.5 0 1 1 0-1h1.5V14H3.463a1.5 1.5 0 0 1-1.5-1.5zM9 14v2.015h2V14zM4 5.5v6a.5.5 0 0 0 .5.5h.998a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5H4.5a.5.5 0 0 0-.5.5m3 0v6a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5"></svg:path>`,
})
export class FluentViewDesktop20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
