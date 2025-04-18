import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHistory16FilledIcon],svg[fluent-history-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3.5a4.5 4.5 0 1 1-4.455 5.14a.75.75 0 0 0-1.485.212A6.001 6.001 0 1 0 4 3.528V2.75a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h2.5a.75.75 0 0 0 0-1.5H4.646A4.5 4.5 0 0 1 8 3.5m.5 2.25a.75.75 0 0 0-1.5 0v2.5c0 .414.336.75.75.75h2a.75.75 0 0 0 0-1.5H8.5z"></svg:path>`,
})
export class FluentHistory16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
