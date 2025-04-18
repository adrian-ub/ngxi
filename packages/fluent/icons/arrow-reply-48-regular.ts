import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowReply48RegularIcon],svg[fluent-arrow-reply-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.134 10.134a1.25 1.25 0 0 0-1.768-1.768l-11 11a1.25 1.25 0 0 0 0 1.768l11 11a1.25 1.25 0 0 0 1.768-1.768L8.268 21.5H25.25c8.975 0 16.25 7.275 16.25 16.25a1.25 1.25 0 1 0 2.5 0C44 27.395 35.605 19 25.25 19H8.268z"></svg:path>`,
})
export class FluentArrowReply48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
