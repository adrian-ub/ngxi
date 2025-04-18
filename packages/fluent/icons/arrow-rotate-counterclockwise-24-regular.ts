import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowRotateCounterclockwise24RegularIcon],svg[fluent-arrow-rotate-counterclockwise-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0-4.977 16.5H5.25a.75.75 0 0 0-.102 1.493L5.25 21h4a.75.75 0 0 0 .743-.648L10 20.25v-4a.75.75 0 0 0-1.493-.102l-.007.102l-.001 2.385A7.501 7.501 0 0 1 12 4.5a7.5 7.5 0 0 1 7.5 7.5a.75.75 0 0 0 1.5 0a9 9 0 0 0-9-9m0 6.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m0 1.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></svg:path>`,
})
export class FluentArrowRotateCounterclockwise24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
