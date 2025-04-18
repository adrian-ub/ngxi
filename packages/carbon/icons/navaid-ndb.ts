import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNavaidNdbIcon],svg[carbon-navaid-ndb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 24a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8m0-14a6 6 0 1 0 6 6a6.007 6.007 0 0 0-6-6"></svg:path><svg:circle cx="16" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="4" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="28" r="2" fill="currentColor"></svg:circle><svg:circle cx="28" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="4" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="7.515" cy="7.515" r="2" fill="currentColor"></svg:circle><svg:circle cx="24.485" cy="24.485" r="2" fill="currentColor"></svg:circle><svg:circle cx="24.485" cy="7.515" r="2" fill="currentColor"></svg:circle><svg:circle cx="7.515" cy="24.485" r="2" fill="currentColor"></svg:circle>`,
})
export class CarbonNavaidNdbIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
