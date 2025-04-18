import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookClock24FilledIcon],svg[fluent-book-clock-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.75 11.375a.625.625 0 0 0 .688.622q.03.003.062.003h1.25a.625.625 0 1 0 0-1.25H13V9.125a.625.625 0 1 0-1.25 0zM4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5zm8.375 1.505a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5"></svg:path>`,
})
export class FluentBookClock24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
