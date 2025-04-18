import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHistory20FilledIcon],svg[fluent-history-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4a6 6 0 1 1-5.996 5.777a.75.75 0 1 0-1.499-.054A7.5 7.5 0 1 0 5 4.41V3.25a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H6.031A5.98 5.98 0 0 1 10 4m.5 2.25a.75.75 0 0 0-1.5 0v4c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H10.5z"></svg:path>`,
})
export class FluentHistory20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
