import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineCasinoIcon],svg[ic-outline-casino-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z"></svg:path><svg:circle cx="7.5" cy="16.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="7.5" cy="7.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="12" cy="12" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="16.5" cy="16.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="16.5" cy="7.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class IcOutlineCasinoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
