import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBlurLinearIcon],svg[ic-twotone-blur-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5"></svg:path><svg:circle cx="9" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="13" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="13" cy="16" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17 12.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5"></svg:path><svg:circle cx="13" cy="12" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M3 3h18v2H3z"></svg:path><svg:circle cx="5" cy="8" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="5" cy="12" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="5" cy="16" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17 8.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5"></svg:path><svg:circle cx="9" cy="16" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="8" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M3 19h18v2H3z"></svg:path>`,
})
export class IcTwotoneBlurLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
