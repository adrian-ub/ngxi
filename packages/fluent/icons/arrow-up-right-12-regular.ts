import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpRight12RegularIcon],svg[fluent-arrow-up-right-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.146 10.854a.5.5 0 0 1 0-.708L9.293 2H4.47a.5.5 0 0 1 0-1h6.03a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V2.707l-8.146 8.147a.5.5 0 0 1-.708 0"></svg:path>`,
})
export class FluentArrowUpRight12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
