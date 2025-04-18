import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlagOff24RegularIcon],svg[fluent-flag-off-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.5 2.5l18 18a.75.75 0 0 1-1.06 1.062l-5.063-5.063l-9.877.002v4.75a.75.75 0 0 1-.648.742L3.75 22a.75.75 0 0 1-.743-.648L3 21.25V5.122l-1.56-1.56A.75.75 0 1 1 2.5 2.5m2.617.498h15.137a.75.75 0 0 1 .6 1.2L16.69 9.75l4.164 5.55a.75.75 0 0 1-.6 1.2H18.62l-1.5-1.5h1.634l-3.602-4.8a.75.75 0 0 1 0-.9l3.602-4.802H6.617zM4.5 6.622v8.379l8.377-.002z"></svg:path>`,
})
export class FluentFlagOff24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
