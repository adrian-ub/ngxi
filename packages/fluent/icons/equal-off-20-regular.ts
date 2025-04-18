import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEqualOff20RegularIcon],svg[fluent-equal-off-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.854 2.146a.5.5 0 1 0-.708.708L6.293 7H3.5a.5.5 0 0 0 0 1h3.793l4 4H3.5a.5.5 0 0 0 0 1h8.793l4.853 4.854a.5.5 0 0 0 .708-.708zM14.12 12l1 1h1.38a.5.5 0 0 0 0-1zm-5-5l1 1h6.38a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentEqualOff20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
