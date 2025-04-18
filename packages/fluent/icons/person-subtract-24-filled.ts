import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonSubtract24FilledIcon],svg[fluent-person-subtract-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17.5a6.47 6.47 0 0 1 1.022-3.5h-6.77a2.25 2.25 0 0 0-2.248 2.248v.92c0 .572.178 1.13.51 1.596C5.056 20.928 7.58 22 11 22q.9 0 1.717-.099A6.48 6.48 0 0 1 11 17.5m0-15.496a5 5 0 1 1 0 10a5 5 0 0 1 0-10M23 17.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-9 0a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5"></svg:path>`,
})
export class FluentPersonSubtract24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
