import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelPlacesCartCartTravelLocalBuckboardRetroIcon],svg[streamline-travel-places-cart-cart-travel-local-buckboard-retro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.59 10H4V3a1 1 0 0 1 1-1h4.5a4 4 0 0 1 4 4v3a1 1 0 0 1-1 1h-2.09M4 10H.5V8"></svg:path><svg:circle cx="9" cy="10.5" r="1.5"></svg:circle><svg:path d="M7.5 5h3"></svg:path></svg:g>`,
})
export class StreamlineTravelPlacesCartCartTravelLocalBuckboardRetroIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
