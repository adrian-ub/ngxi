import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpRightDashes12RegularIcon],svg[fluent-arrow-up-right-dashes-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7.5a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5H4.47a.5.5 0 0 0 0 1h4.823L7.146 4.146a.5.5 0 1 0 .708.708L10 2.707zM6.354 6.354a.5.5 0 1 0-.708-.708l-1.5 1.5a.5.5 0 1 0 .708.708zm-3 3a.5.5 0 1 0-.708-.708l-1.5 1.5a.5.5 0 0 0 .708.708z"></svg:path>`,
})
export class FluentArrowUpRightDashes12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
