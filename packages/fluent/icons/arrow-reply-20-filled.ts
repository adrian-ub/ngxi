import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowReply20FilledIcon],svg[fluent-arrow-reply-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.78 4.78a.75.75 0 0 0-1.06-1.06l-4.5 4.5a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06L4.56 9.5h6.19a5.75 5.75 0 0 1 5.75 5.75a.75.75 0 0 0 1.5 0A7.25 7.25 0 0 0 10.75 8H4.56z"></svg:path>`,
})
export class FluentArrowReply20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
