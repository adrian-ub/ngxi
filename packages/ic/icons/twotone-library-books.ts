import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneLibraryBooksIcon],svg[ic-twotone-library-books-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16h12V4H8zm2-10h8v2h-8zm0 3h8v2h-8zm0 3h4v2h-4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2M6 4v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2m14 12H8V4h12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z"></svg:path>`,
})
export class IcTwotoneLibraryBooksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
