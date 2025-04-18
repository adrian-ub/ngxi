import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentBook2LibraryContentBooksBookShelfStackIcon],svg[streamline-interface-content-book-2-library-content-books-book-shelf-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="3.5" height="13" x=".55" y=".5" rx=".5"></svg:rect><svg:rect width="3.5" height="11" x="4.05" y="2.5" rx=".5"></svg:rect><svg:rect width="3" height="11" x="9.26" y="2.3" rx=".5" transform="rotate(-14.05 10.779 7.795)"></svg:rect><svg:path d="M.55 10h3.5m0-1h3.5m2.5 2l2.88-.72"></svg:path></svg:g>`,
})
export class StreamlineInterfaceContentBook2LibraryContentBooksBookShelfStackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
