import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowMaximize16FilledIcon],svg[fluent-arrow-maximize-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.477 2a.75.75 0 0 0 0 1.5h2.962L3.5 11.44V8.476a.75.75 0 0 0-1.5 0v4.673c0 .47.38.85.85.85h4.673a.75.75 0 0 0 0-1.5H4.56L12.5 4.56v2.963a.75.75 0 0 0 1.5 0V2.85a.85.85 0 0 0-.85-.85z"></svg:path>`,
})
export class FluentArrowMaximize16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
