import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneLocalOfferIcon],svg[ic-twotone-local-offer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4H4v7l9 9.01L20 13zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5S8 5.67 8 6.5S7.33 8 6.5 8" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12.41 2.58C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9z"></svg:path><svg:circle cx="6.5" cy="6.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class IcTwotoneLocalOfferIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
