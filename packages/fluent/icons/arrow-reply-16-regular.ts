import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowReply16RegularIcon],svg[fluent-arrow-reply-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.354 3.646a.5.5 0 0 1 0 .708L3.707 7H8.5a5.5 5.5 0 0 1 5.5 5.5a.5.5 0 0 1-1 0A4.5 4.5 0 0 0 8.5 8H3.707l2.647 2.646a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0"></svg:path>`,
})
export class FluentArrowReply16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
