import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilClockTenIcon],svg[uil-clock-ten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a1 1 0 0 0-1 1v3.268l-1.098-.634a1 1 0 0 0-1 1.732l2.598 1.5A1 1 0 0 0 13 12V7a1 1 0 0 0-1-1m0-4a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8"></svg:path>`,
})
export class UilClockTenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
