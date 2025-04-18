import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareMinimalisticChargeLineDuotoneIcon],svg[solar-watch-square-minimalistic-charge-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 12c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 5 9.19 5 12 5s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 7.787 19 9.19 19 12s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 19 14.81 19 12 19s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 16.213 5 14.81 5 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12.857 9L10 12h4l-2.857 3"></svg:path><svg:path stroke-linecap="round" d="M7 2h10M7 22h10"></svg:path></svg:g>`,
})
export class SolarWatchSquareMinimalisticChargeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
