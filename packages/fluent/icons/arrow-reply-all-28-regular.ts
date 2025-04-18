import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowReplyAll28RegularIcon],svg[fluent-arrow-reply-all-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.28 5.22a.75.75 0 0 1 0 1.06l-5.47 5.47l5.47 5.47a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0m4.5 0a.75.75 0 0 1 0 1.06L10.06 11h4.69C20.41 11 25 15.59 25 21.25a.75.75 0 0 1-1.5 0a8.75 8.75 0 0 0-8.75-8.75h-4.69l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class FluentArrowReplyAll28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
