import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowFitIn16RegularIcon],svg[fluent-arrow-fit-in-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.854 5.146a.5.5 0 1 0-.708.708L5.293 7H1.5a.5.5 0 0 0 0 1h3.793L4.146 9.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708zm7 .708a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L10.707 8H14.5a.5.5 0 0 0 0-1h-3.793z"></svg:path>`,
})
export class FluentArrowFitIn16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
