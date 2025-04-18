import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonArrowBack24FilledIcon],svg[fluent-person-arrow-back-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17.5a6.47 6.47 0 0 1 1.022-3.5h-7.77a2.25 2.25 0 0 0-2.248 2.248v.92c0 .572.178 1.13.51 1.596C4.056 20.928 6.58 22 10 22q1.397 0 2.592-.238A6.48 6.48 0 0 1 11 17.5M10 2.004a5 5 0 1 1 0 10a5 5 0 0 1 0-10M23 17.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-6.646-2.146a.5.5 0 0 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708-.708L15.707 17h2.043A2.25 2.25 0 0 1 20 19.25v.25a.5.5 0 0 0 1 0v-.25A3.25 3.25 0 0 0 17.75 16h-2.043z"></svg:path>`,
})
export class FluentPersonArrowBack24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
