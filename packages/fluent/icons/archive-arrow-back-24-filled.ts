import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArchiveArrowBack24FilledIcon],svg[fluent-archive-arrow-back-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5V6a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 6zM4 9h16v2.498A6.5 6.5 0 0 0 17.5 11a6.5 6.5 0 0 0-3 .732a.75.75 0 0 0-.75-.732h-3.5a.75.75 0 0 0 0 1.5h3.096a6.49 6.49 0 0 0-2.346 5a6.47 6.47 0 0 0 1.022 3.5H7.75A3.75 3.75 0 0 1 4 17.25zm19 8.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-6.646-2.146a.5.5 0 0 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708-.708L15.707 17h2.043A2.25 2.25 0 0 1 20 19.25v.25a.5.5 0 0 0 1 0v-.25A3.25 3.25 0 0 0 17.75 16h-2.043z"></svg:path>`,
})
export class FluentArchiveArrowBack24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
