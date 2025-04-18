import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimClockTwoIcon],svg[uim-clock-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="10" fill="currentColor" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M11 7a1 1 0 0 1 2 0v3.268l1.098-.634a1 1 0 0 1 1 1.732l-2.598 1.5A1.014 1.014 0 0 1 11 12Z"></svg:path>`,
})
export class UimClockTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
