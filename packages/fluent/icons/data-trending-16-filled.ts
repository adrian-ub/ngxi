import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataTrending16FilledIcon],svg[fluent-data-trending-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 2.75a.75.75 0 0 0-1.5 0v8.5A2.75 2.75 0 0 0 4.75 14h8.5a.75.75 0 0 0 0-1.5h-8.5c-.69 0-1.25-.56-1.25-1.25zm6.25 2c0 .414.336.75.75.75h.94L9 7.94L7.53 6.47a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 0 0 1.06 1.06L7 8.06l1.47 1.47a.75.75 0 0 0 1.06 0l2.97-2.97v1.017a.75.75 0 0 0 1.5 0V4.75a.75.75 0 0 0-.75-.75H10.5a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class FluentDataTrending16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
