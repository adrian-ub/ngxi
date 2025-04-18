import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneAddToPhotosIcon],svg[ic-twotone-add-to-photos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H8v12h12zm-1 7h-4v4h-2v-4H9V9h4V5h2v4h4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2m4-4h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2M8 4h12v12H8zm7 1h-2v4H9v2h4v4h2v-4h4V9h-4z"></svg:path>`,
})
export class IcTwotoneAddToPhotosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
