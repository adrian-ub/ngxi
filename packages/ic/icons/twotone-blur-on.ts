import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBlurOnIcon],svg[ic-twotone-blur-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="14" cy="10" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="14" cy="18" r="1" fill="currentColor"></svg:circle><svg:circle cx="14" cy="14" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="14" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M3 9.5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5M14.5 3c0-.28-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5M21 14.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5"></svg:path><svg:circle cx="18" cy="18" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M13.5 21c0 .28.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5M21 10.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5"></svg:path><svg:circle cx="18" cy="14" r="1" fill="currentColor"></svg:circle><svg:circle cx="18" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="18" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="14" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M3.5 14c0-.28-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5"></svg:path><svg:circle cx="10" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M9.5 21c0 .28.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5"></svg:path><svg:circle cx="10" cy="18" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M10.5 3c0-.28-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5"></svg:path><svg:circle cx="10" cy="14" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="10" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="18" cy="10" r="1" fill="currentColor"></svg:circle>`,
})
export class IcTwotoneBlurOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
