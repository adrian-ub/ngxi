import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonArrowRight24FilledIcon],svg[fluent-person-arrow-right-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17.5a6.47 6.47 0 0 1 1.022-3.5h-7.77a2.25 2.25 0 0 0-2.248 2.25v.919c0 .572.178 1.13.51 1.596C4.056 20.929 6.58 22 10 22q1.397 0 2.593-.238A6.48 6.48 0 0 1 11 17.5M10 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10M23 17.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-4.646-2.853a.5.5 0 0 0-.707.707L19.293 17H15a.5.5 0 1 0 0 1h4.293l-1.646 1.647a.5.5 0 0 0 .707.707l2.5-2.5A.5.5 0 0 0 21 17.51v-.01a.5.5 0 0 0-.15-.357z"></svg:path>`,
})
export class FluentPersonArrowRight24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
