import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowReplyDown24RegularIcon],svg[fluent-arrow-reply-down-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.25 5a.75.75 0 0 1 .75.75v.5A7.75 7.75 0 0 1 13.25 14H5.56l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 1.06L5.56 12.5h7.69a6.25 6.25 0 0 0 6.25-6.25v-.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class FluentArrowReplyDown24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
