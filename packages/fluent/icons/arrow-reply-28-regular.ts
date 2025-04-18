import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowReply28RegularIcon],svg[fluent-arrow-reply-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.28 6.28a.75.75 0 1 0-1.06-1.06l-6 6a.75.75 0 0 0 0 1.06l6 6a.75.75 0 1 0 1.06-1.06L5.56 12.5h9.19a8.75 8.75 0 0 1 8.75 8.75a.75.75 0 0 0 1.5 0C25 15.59 20.41 11 14.75 11H5.56z"></svg:path>`,
})
export class FluentArrowReply28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
