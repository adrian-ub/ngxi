import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentScreenshotRecord24FilledIcon],svg[fluent-screenshot-record-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h5.772A6.5 6.5 0 0 1 21 12.022V6.25A3.25 3.25 0 0 0 17.75 3zM8 7.5a.5.5 0 0 0-.5.5v2.25a.75.75 0 0 1-1.5 0V8a2 2 0 0 1 2-2h2.25a.75.75 0 0 1 0 1.5zM7.5 16a.5.5 0 0 0 .5.5h2.25a.75.75 0 0 1 0 1.5H8a2 2 0 0 1-2-2v-2.25a.75.75 0 0 1 1.5 0zM16 7.5h-2.25a.75.75 0 0 1 0-1.5H16a2 2 0 0 1 2 2v2.25a.75.75 0 0 1-1.5 0V8a.5.5 0 0 0-.5-.5m1.5 6a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 9.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m2.5-5.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path>`,
})
export class FluentScreenshotRecord24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
