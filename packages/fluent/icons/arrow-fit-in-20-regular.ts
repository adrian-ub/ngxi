import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowFitIn20RegularIcon],svg[fluent-arrow-fit-in-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.646 7.354a.5.5 0 1 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L7.293 10H2.5a.5.5 0 0 1 0-1h4.793zm8.708 0a.5.5 0 0 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L12.707 10H17.5a.5.5 0 0 0 0-1h-4.793z"></svg:path>`,
})
export class FluentArrowFitIn20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
