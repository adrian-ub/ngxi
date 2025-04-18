import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiAirplayIcon],svg[mynaui-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.632 16.511c-.216-.284-.324-.426-.455-.477a.48.48 0 0 0-.354 0c-.13.051-.239.193-.455.477l-2.363 3.106c-.336.443-.505.664-.505.85c0 .163.07.316.19.417c.139.116.408.116.947.116h4.726c.539 0 .808 0 .947-.116a.54.54 0 0 0 .19-.416c0-.187-.169-.408-.505-.85z"></svg:path><svg:path d="M17.4 18h.6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h.6"></svg:path></svg:g>`,
})
export class MynauiAirplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
