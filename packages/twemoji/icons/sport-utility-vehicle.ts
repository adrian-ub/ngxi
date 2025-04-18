import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiSportUtilityVehicleIcon],svg[twemoji-sport-utility-vehicle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#292F33" d="M36 24a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1z"></svg:path><svg:path fill="#3B88C3" d="M5 31h26c1 0 3-1 3-4c0-2 0-8-1-9s0-7-4-7H15c-3 0-6 7-6 7l-4 1s-4 1-4 4v3s-1 .338-1 1.957S1 30 1 30z"></svg:path><svg:circle cx="9" cy="31" r="4" fill="#292F33"></svg:circle><svg:circle cx="9" cy="31" r="2" fill="#CCD6DD"></svg:circle><svg:circle cx="27" cy="31" r="4" fill="#292F33"></svg:circle><svg:circle cx="27" cy="31" r="2" fill="#CCD6DD"></svg:circle><svg:path fill="#BBDDF5" d="M24 17a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1zm-11 0c0 1 .448 1 1 1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5c-1 0-3 3-3 4"></svg:path><svg:path fill="#55ACEE" d="M32 23.5a1.5 1.5 0 0 1-1.5 1.5h-22a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5"></svg:path>`,
})
export class TwemojiSportUtilityVehicleIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
