import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineSocialDistanceIcon],svg[ic-outline-social-distance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m4.78 3.58a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 2 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85M18 7c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m2.78 1.58a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 14 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85m-2.77 4.43l-1.41 1.41L18.17 16H5.83l1.58-1.59L6 13l-4 4l3.99 3.99l1.41-1.41L5.83 18h12.34l-1.58 1.58L18 20.99L22 17z"></svg:path>`,
})
export class IcOutlineSocialDistanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
