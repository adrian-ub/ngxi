import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPunchClockIcon],svg[ic-sharp-punch-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-3V1H6v5H3v16h18zM8 3h8v3H8zm4 16c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"></svg:path><svg:path fill="currentColor" d="M12.5 11.5h-1v2.71l1.64 1.64l.71-.71l-1.35-1.35z"></svg:path>`,
})
export class IcSharpPunchClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
