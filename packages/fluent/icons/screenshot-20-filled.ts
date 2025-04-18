import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentScreenshot20FilledIcon],svg[fluent-screenshot-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm.5 3a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 5h2a.5.5 0 0 1 0 1zM6 13.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 1 0 1h-2A1.5 1.5 0 0 1 5 13.5v-2a.5.5 0 0 1 1 0zM13.5 6h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 15 6.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 0-.5-.5m.5 7.5v-2a.5.5 0 0 1 1 0v2a1.5 1.5 0 0 1-1.5 1.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 0 .5-.5"></svg:path>`,
})
export class FluentScreenshot20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
