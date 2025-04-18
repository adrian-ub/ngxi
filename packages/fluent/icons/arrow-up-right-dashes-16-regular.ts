import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpRightDashes16RegularIcon],svg[fluent-arrow-up-right-dashes-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2a.5.5 0 0 0 0 1h4.793l-2.147 2.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5zm1.354 5.854a.5.5 0 1 0-.708-.708l-2 2a.5.5 0 1 0 .708.708zm-4 4a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 .708.708z"></svg:path>`,
})
export class FluentArrowUpRightDashes16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
