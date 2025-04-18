import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciChevronDuoLeftIcon],svg[ci-chevron-duo-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.585 18.01L5.575 12l6.01-6.01L13 7.404l-4.6 4.6l4.6 4.6l-1.414 1.406h-.001Zm5.425 0L10.999 12l6.011-6.01l1.414 1.414l-4.6 4.6l4.6 4.6l-1.413 1.406h-.001Z"></svg:path>`,
})
export class CiChevronDuoLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
