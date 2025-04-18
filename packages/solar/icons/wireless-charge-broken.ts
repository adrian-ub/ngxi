import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWirelessChargeBrokenIcon],svg[solar-wireless-charge-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M11.25 22a.75.75 0 0 0 1.5 0zm0-1v1h1.5v-1z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.857 7L10 10h4l-2.857 3"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13.5 18v1.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C12.699 21 12.466 21 12 21s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883V18"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4.582 7A8 8 0 1 0 9 2.582"></svg:path></svg:g>`,
})
export class SolarWirelessChargeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
