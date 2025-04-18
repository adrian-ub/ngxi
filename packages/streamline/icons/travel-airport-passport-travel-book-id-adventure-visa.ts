import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelAirportPassportTravelBookIdAdventureVisaIcon],svg[streamline-travel-airport-passport-travel-book-id-adventure-visa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="11" height="13" x="1.5" y=".5" rx="1"></svg:rect><svg:circle cx="7" cy="6" r="3"></svg:circle><svg:path d="M4 6h6M7 9V3"></svg:path></svg:g>`,
})
export class StreamlineTravelAirportPassportTravelBookIdAdventureVisaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
