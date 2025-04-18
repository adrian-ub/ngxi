import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneLibraryAddCheckIcon],svg[ic-twotone-library-add-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16h12V4H8zm2.4-6.91l2.07 2.08L17.6 6L19 7.41L12.47 14L9 10.5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H8V4h12zm-7.53-2L9 10.5l1.4-1.41l2.07 2.08L17.6 6L19 7.41zM4 20h14v2H4c-1.1 0-2-.9-2-2V6h2z"></svg:path>`,
})
export class IcTwotoneLibraryAddCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
