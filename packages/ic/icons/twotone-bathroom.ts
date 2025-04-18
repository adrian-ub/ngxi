import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBathroomIcon],svg[ic-twotone-bathroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20h16V4H4zm5-2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-8-4c0-2.76 2.24-5 5-5s5 2.24 5 5v1H7z" opacity=".3"></svg:path><svg:circle cx="15" cy="14" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="14" r="1" fill="currentColor"></svg:circle><svg:circle cx="15" cy="17" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H4V4h16z"></svg:path><svg:path fill="currentColor" d="M17 11c0-2.76-2.24-5-5-5s-5 2.24-5 5v1h10zm-8.46-.5c.24-1.69 1.7-3 3.46-3s3.22 1.31 3.47 3z"></svg:path><svg:circle cx="9" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="14" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="17" r="1" fill="currentColor"></svg:circle>`,
})
export class IcTwotoneBathroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
