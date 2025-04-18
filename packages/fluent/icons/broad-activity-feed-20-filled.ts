import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBroadActivityFeed20FilledIcon],svg[fluent-broad-activity-feed-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 3A1.5 1.5 0 0 0 2 4.5v4A1.5 1.5 0 0 0 3.5 10h13A1.5 1.5 0 0 0 18 8.5v-4A1.5 1.5 0 0 0 16.5 3zm0 9A1.5 1.5 0 0 0 2 13.5v2A1.5 1.5 0 0 0 3.5 17h4A1.5 1.5 0 0 0 9 15.5v-2A1.5 1.5 0 0 0 7.5 12zm9 0a1.5 1.5 0 0 0-1.5 1.5v2a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5z"></svg:path>`,
})
export class FluentBroadActivityFeed20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
