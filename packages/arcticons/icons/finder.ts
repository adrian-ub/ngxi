import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFinderIcon],svg[arcticons-finder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="18.09" height="29.85" x="14.96" y="13.64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.81 13.64v-3.62m-10.69 6.79h11.76v11.76H18.12zm5.36-9.64a6.61 6.61 0 0 1 5.3-2.68h0a6.63 6.63 0 0 1 5.31 2.68m-8 1.72a3.23 3.23 0 0 1 5.31 0"></svg:path><svg:circle cx="19.62" cy="31.61" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="31.61" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.38" cy="31.61" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="35.99" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="40.37" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.38" cy="35.99" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.38" cy="40.37" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.62" cy="35.99" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.62" cy="40.37" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsFinderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
