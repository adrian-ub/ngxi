import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBaggageClaimIcon],svg[carbon-baggage-claim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="6" cy="26" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 18h-3v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2h-3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m-9-2h4v2h-4Zm9 12H14v-8h14Z"></svg:path><svg:path fill="currentColor" d="M10 6h4v6h2V6h4v6h2V6h4v6h2V6.005A2.005 2.005 0 0 0 25.995 4H4.005A2.005 2.005 0 0 0 2 6.005v13.99A2.005 2.005 0 0 0 4.005 22H10ZM8 20H4V6h4Z"></svg:path>`,
})
export class CarbonBaggageClaimIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
