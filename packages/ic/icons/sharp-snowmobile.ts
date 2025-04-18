import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSnowmobileIcon],svg[ic-sharp-snowmobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17c0 .55-.45 1-1 1h-.17l-2.2-2.2C21.6 15.18 23 13 23 13l-9-8h-3v2h2.25l1.45 1.3L11 11l-9.5-1L0 13l4.54 1.36l-3.49 1.88C-.77 17.22-.07 20 2 20h6c2.21 0 4-1.79 4-4h4l2 2h-3v2h6c1.66 0 3-1.34 3-3zM8 18H2l5.25-2.83L10 16a2 2 0 0 1-2 2"></svg:path>`,
})
export class IcSharpSnowmobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
