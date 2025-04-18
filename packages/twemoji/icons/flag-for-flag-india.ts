import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagForFlagIndiaIcon],svg[twemoji-flag-for-flag-india-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#138808" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4H0v4z"></svg:path><svg:path fill="#EEE" d="M0 13h36v10H0z"></svg:path><svg:path fill="#F93" d="M36 13V9a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v4h36z"></svg:path><svg:circle fill="navy" cx="18" cy="18" r="4"></svg:circle><svg:circle fill="#EEE" cx="18" cy="18" r="3"></svg:circle><svg:path fill="#6666B3" d="M18 15l.146 2.264l1.001-2.035l-.73 2.147l1.704-1.498l-1.497 1.705l2.147-.731l-2.035 1.002L21 18l-2.264.146l2.035 1.001l-2.147-.73l1.497 1.704l-1.704-1.497l.73 2.147l-1.001-2.035L18 21l-.146-2.264l-1.002 2.035l.731-2.147l-1.705 1.497l1.498-1.704l-2.147.73l2.035-1.001L15 18l2.264-.146l-2.035-1.002l2.147.731l-1.498-1.705l1.705 1.498l-.731-2.147l1.002 2.035z"></svg:path><svg:circle fill="navy" cx="18" cy="18" r="1"></svg:circle>`,
})
export class TwemojiFlagForFlagIndiaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
