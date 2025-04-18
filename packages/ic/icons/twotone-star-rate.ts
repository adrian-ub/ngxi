import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneStarRateIcon],svg[ic-twotone-star-rate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.94 12L12 8.89L11.06 12H8.24l2.27 1.62l-.93 3.01L12 14.79l2.42 1.84l-.93-3.01L15.76 12z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M22 10h-7.58L12 2l-2.42 8H2l6.17 4.41L5.83 22L12 17.31L18.17 22l-2.35-7.59zm-7.58 6.63L12 14.79l-2.42 1.84l.93-3.01L8.24 12h2.82L12 8.89l.94 3.11h2.82l-2.27 1.62z"></svg:path>`,
})
export class IcTwotoneStarRateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
