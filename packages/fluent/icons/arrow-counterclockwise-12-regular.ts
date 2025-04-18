import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCounterclockwise12RegularIcon],svg[fluent-arrow-counterclockwise-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2.5a.5.5 0 0 1 1 0v.854a4 4 0 1 1-.963 3.19c-.04-.298.207-.544.508-.544c.251 0 .451.205.489.453A3 3 0 1 0 3.764 4H4.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"></svg:path>`,
})
export class FluentArrowCounterclockwise12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
