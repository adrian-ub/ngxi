import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiDeliveryTruckIcon],svg[twemoji-delivery-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DD2E44" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-3a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFCC4D" d="m19 13l-.979-1H7.146C4 12 3 14 3 14l-3 5.959V25h19z"></svg:path><svg:path fill="#55ACEE" d="M9 20H2l2-4s1-2 3-2h2z"></svg:path><svg:circle cx="9" cy="31" r="4" fill="#292F33"></svg:circle><svg:circle cx="9" cy="31" r="2" fill="#CCD6DD"></svg:circle><svg:circle cx="27" cy="31" r="4" fill="#292F33"></svg:circle><svg:circle cx="27" cy="31" r="2" fill="#CCD6DD"></svg:circle><svg:path fill="#CCD6DD" d="M32 8H17a4 4 0 0 0-4 4v13h23V12a4 4 0 0 0-4-4"></svg:path>`,
})
export class TwemojiDeliveryTruckIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
