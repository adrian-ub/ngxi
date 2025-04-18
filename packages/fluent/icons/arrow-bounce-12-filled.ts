import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowBounce12FilledIcon],svg[fluent-arrow-bounce-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3.75A.75.75 0 0 1 1.75 3h3.5a.75.75 0 0 1 0 1.5H3.56L6.5 7.44l3.22-3.22a.75.75 0 1 1 1.06 1.06L7.03 9.03a.75.75 0 0 1-1.06 0L2.5 5.56v1.69a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class FluentArrowBounce12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
