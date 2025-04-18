import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBookmarkIcon],svg[openmoji-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiBookmark0" d="m46.5 56l-10-11.151L26.5 56V10.958h20z"></svg:path></svg:defs><svg:path fill="#EA5A47" d="m46.5 56l-10-11.151L26.5 56V10.958h20z"></svg:path><svg:path fill="#D22F27" d="M41.864 12.03v37.854l4.523 5.044V12.03z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:use href="#openmojiBookmark0"></svg:use><svg:use href="#openmojiBookmark0"></svg:use></svg:g>`,
})
export class OpenmojiBookmarkIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
