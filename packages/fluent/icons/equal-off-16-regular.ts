import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEqualOff16RegularIcon],svg[fluent-equal-off-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.293 11l3.853 3.854a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708L4.293 5H2.5a.5.5 0 0 0 0 1h2.793l4 4H2.5a.5.5 0 0 0 0 1zm1.828-1l1 1h.379a.5.5 0 0 0 0-1zm-5-5l1 1H13.5a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentEqualOff16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
