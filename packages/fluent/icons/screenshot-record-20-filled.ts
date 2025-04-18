import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentScreenshotRecord20FilledIcon],svg[fluent-screenshot-record-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6A5.5 5.5 0 0 1 17 9.6V6a3 3 0 0 0-3-3zm8.5 6a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 15 6.5v2a.5.5 0 0 1-.5.5M9 14.5a.5.5 0 0 1-.5.5h-2A1.5 1.5 0 0 1 5 13.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 1 .5.5M6.5 6a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 5h2a.5.5 0 0 1 0 1zm8 5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m0 8a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m2.5-4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path>`,
})
export class FluentScreenshotRecord20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
