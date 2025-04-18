import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddPhotoAlternateIcon],svg[ic-twotone-add-photo-alternate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.21 16.83l-1.96-2.36L5.5 18h11l-3.54-4.71z"></svg:path><svg:path fill="currentColor" d="M16.5 18h-11l2.75-3.53l1.96 2.36l2.75-3.54zM17 7h-3V6H4v14h14V10h-1z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20 4V1h-2v3h-3v2h3v2.99h2V6h3V4zm-2 16H4V6h10V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10h-2z"></svg:path>`,
})
export class IcTwotoneAddPhotoAlternateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
