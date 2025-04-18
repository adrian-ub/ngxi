import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowBounce12RegularIcon],svg[fluent-arrow-bounce-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H2.707L6.5 7.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0L2 4.707V7.5a.5.5 0 0 1-1 0z"></svg:path>`,
})
export class FluentArrowBounce12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
