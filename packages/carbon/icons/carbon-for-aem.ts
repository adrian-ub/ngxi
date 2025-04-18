import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCarbonForAemIcon],svg[carbon-carbon-for-aem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="28.5" cy="24.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="23.5" cy="27.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="18.5" cy="24.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="18.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="23.5" cy="16.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="28.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h9v-2H4V10h24v4h2V4a2 2 0 0 0-2-2m0 6H4V4h24z"></svg:path>`,
})
export class CarbonCarbonForAemIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
