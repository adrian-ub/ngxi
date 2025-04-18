import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneLibraryAddIcon],svg[ic-twotone-library-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16h12V4H8zm2-7h3V6h2v3h3v2h-3v3h-2v-3h-3z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2M8 2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm12 14H8V4h12zm-7-2h2v-3h3V9h-3V6h-2v3h-3v2h3z"></svg:path>`,
})
export class IcTwotoneLibraryAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
