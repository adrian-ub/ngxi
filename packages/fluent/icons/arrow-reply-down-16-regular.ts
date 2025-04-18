import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowReplyDown16RegularIcon],svg[fluent-arrow-reply-down-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 3a.5.5 0 0 1 .5.5A5.5 5.5 0 0 1 8.5 9H3.707l2.647 2.646a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 1 1 .708.708L3.707 8H8.5A4.5 4.5 0 0 0 13 3.5a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentArrowReplyDown16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
