import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowReply48FilledIcon],svg[fluent-arrow-reply-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.56 10.56a1.5 1.5 0 0 0-2.12-2.12l-11 11a1.5 1.5 0 0 0 0 2.12l11 11a1.5 1.5 0 0 0 2.12-2.12L9.122 22H24.5C33.613 22 41 29.387 41 38.5a1.5 1.5 0 0 0 3 0C44 27.73 35.27 19 24.5 19H9.121z"></svg:path>`,
})
export class FluentArrowReply48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
