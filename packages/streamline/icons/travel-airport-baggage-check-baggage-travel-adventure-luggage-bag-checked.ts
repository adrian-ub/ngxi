import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelAirportBaggageCheckBaggageTravelAdventureLuggageBagCheckedIcon],svg[streamline-travel-airport-baggage-check-baggage-travel-adventure-luggage-bag-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9.5" x=".5" y="4" rx="2"></svg:rect><svg:path d="M4 13.5V4m6 9.5V4M4.5 4a2.5 2.5 0 0 1 5 0"></svg:path></svg:g>`,
})
export class StreamlineTravelAirportBaggageCheckBaggageTravelAdventureLuggageBagCheckedIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
