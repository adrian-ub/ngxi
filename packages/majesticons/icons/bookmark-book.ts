import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsBookmarkBookIcon],svg[majesticons-bookmark-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-6v8.755a.5.5 0 0 1-.832.374l-1.836-1.632a.5.5 0 0 0-.664 0L7.832 12.13A.5.5 0 0 1 7 11.755V3H5z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsBookmarkBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
