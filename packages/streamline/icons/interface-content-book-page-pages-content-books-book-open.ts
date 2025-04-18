import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentBookPagePagesContentBooksBookOpenIcon],svg[streamline-interface-content-book-page-pages-content-books-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8 12.5a1 1 0 0 1-1.45.89l-4-2A1 1 0 0 1 2 10.5V.5l5.45 2.72a1 1 0 0 1 .55.9Z"></svg:path><svg:path d="M2 .5h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H8"></svg:path></svg:g>`,
})
export class StreamlineInterfaceContentBookPagePagesContentBooksBookOpenIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
