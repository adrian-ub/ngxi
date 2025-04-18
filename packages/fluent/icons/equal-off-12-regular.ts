import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEqualOff12RegularIcon],svg[fluent-equal-off-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.854 1.146a.5.5 0 1 0-.708.708L3.293 4H2a.5.5 0 0 0 0 1h2.293l2 2H2a.5.5 0 0 0 0 1h5.293l2.853 2.854a.5.5 0 0 0 .708-.708zM9.12 7l.988.988A.5.5 0 0 0 10 7zm-3-3l1 1H10a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentEqualOff12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
