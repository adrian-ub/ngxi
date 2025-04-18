import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiPickupTruckIcon],svg[twemoji-pickup-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DD2E44" d="M33 31c1 0 1-1 1-4c0-.692 0-3.862-.041-5.138C33.939 21.258 33.149 20 32 20H20v-6c0-1.058-.235-2-2-2h-5c-3 0-6 8-6 8s-6 0-6 3v4s-1 .338-1 1.957S1 31 2 31z"></svg:path><svg:circle cx="9" cy="31" r="4" fill="#292F33"></svg:circle><svg:circle cx="9" cy="31" r="2" fill="#CCD6DD"></svg:circle><svg:circle cx="27" cy="31" r="4" fill="#292F33"></svg:circle><svg:circle cx="27" cy="31" r="2" fill="#CCD6DD"></svg:circle><svg:path fill="#BBDDF5" d="M10 19c0 1 .448 1 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3c-1 0-3 4-3 5"></svg:path><svg:path fill="#F492A9" d="M36 21.5a1.5 1.5 0 0 1-1.5 1.5H20v-3h14.5a1.5 1.5 0 0 1 1.5 1.5"></svg:path><svg:path fill="#99AAB5" d="M1 23h1v5H1z"></svg:path><svg:path fill="#CCD6DD" d="M2 31H1c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1m32 0h-1c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1"></svg:path>`,
})
export class TwemojiPickupTruckIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
