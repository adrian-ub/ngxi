import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTravelLuggageAndBagsIcon],svg[material-symbols-light-travel-luggage-and-bags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.904 7h2.192V4.808h-2.192zM12 12.385q-1.611 0-3.116-.557Q7.381 11.271 6 10.412V8.615q0-.666.474-1.14T7.616 7h2.288V4.577q0-.31.23-.54t.539-.23h2.654q.31 0 .54.23t.23.54V7h2.288q.666 0 1.14.475T18 8.615v1.797q-1.38.86-2.884 1.416q-1.504.557-3.116.557M7.616 21v-1q-.667 0-1.141-.475T6 18.386v-6.8q1.285.734 2.657 1.21q1.372.474 2.843.578v1.011h1v-1.011q1.471-.104 2.843-.579q1.373-.475 2.657-1.21v6.8q0 .667-.475 1.141t-1.14.475v1h-1v-1h-6.77v1z"></svg:path>`,
})
export class MaterialSymbolsLightTravelLuggageAndBagsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
