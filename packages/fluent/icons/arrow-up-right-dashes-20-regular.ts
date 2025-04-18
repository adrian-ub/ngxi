import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpRightDashes20RegularIcon],svg[fluent-arrow-up-right-dashes-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.507A.5.5 0 0 0 16.5 3h-8a.5.5 0 0 0 0 1h6.793l-2.147 2.146a.5.5 0 0 0 .708.708L16 4.707V11.5a.5.5 0 1 0 1 0zM6.854 13.854a.5.5 0 0 0-.708-.708l-3 3a.5.5 0 0 0 .708.708zm5-5.708a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0"></svg:path>`,
})
export class FluentArrowUpRightDashes20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
