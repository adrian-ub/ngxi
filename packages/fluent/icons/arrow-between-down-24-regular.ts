import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowBetweenDown24RegularIcon],svg[fluent-arrow-between-down-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1.75a.75.75 0 0 0-1.5 0v.5A2.25 2.25 0 0 0 6.75 4.5h10A2.25 2.25 0 0 0 19 2.25v-.5a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 6 2.25zM11.75 6a.75.75 0 0 1 .75.75v8.69l3.72-3.72a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06L11 15.44V6.75a.75.75 0 0 1 .75-.75M4.5 21.75a2.25 2.25 0 0 1 2.25-2.25h10A2.25 2.25 0 0 1 19 21.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 0-.75-.75h-10a.75.75 0 0 0-.75.75v.5a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class FluentArrowBetweenDown24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
