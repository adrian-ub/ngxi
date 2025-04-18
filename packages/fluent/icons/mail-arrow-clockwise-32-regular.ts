import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailArrowClockwise32RegularIcon],svg[fluent-mail-arrow-clockwise-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.5 2a1 1 0 1 0-2 0v1a7.5 7.5 0 1 0 3 6a1 1 0 1 0-2 0a5.5 5.5 0 1 1-2.337-4.5H26a1 1 0 1 0 0 2h3.5a1 1 0 0 0 1-1zm-24 3h9.436a9 9 0 0 0-.713 2H6.5A2.5 2.5 0 0 0 4 9.5v.903l12 6.461l2.055-1.106c.564.496 1.19.923 1.866 1.267l-3.447 1.856a1 1 0 0 1-.948 0L4 12.674V22.5A2.5 2.5 0 0 0 6.5 25h19a2.5 2.5 0 0 0 2.5-2.5v-5.436a9 9 0 0 0 2-1.356V22.5a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5v-13A4.5 4.5 0 0 1 6.5 5"></svg:path>`,
})
export class FluentMailArrowClockwise32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
