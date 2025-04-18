import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTimeline20FilledIcon],svg[fluent-timeline-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 3A1.5 1.5 0 0 0 2 4.5v4A1.5 1.5 0 0 0 3.5 10h9A1.5 1.5 0 0 0 14 8.5v-4A1.5 1.5 0 0 0 12.5 3zm0 8A1.5 1.5 0 0 0 2 12.5v4A1.5 1.5 0 0 0 3.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.5-1.5zM17 12.437a2.003 2.003 0 0 1-2.5-1.937A2 2 0 0 1 16 8.563a2 2 0 0 1 1 0a2 2 0 0 1 0 3.874M16.5 3a.5.5 0 0 1 .5.5v4.041a3 3 0 0 0-1 0V3.5a.5.5 0 0 1 .5-.5m0 10.5q-.255 0-.5-.041V17.5a.5.5 0 0 0 1 0v-4.041q-.245.04-.5.041"></svg:path>`,
})
export class FluentTimeline20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
