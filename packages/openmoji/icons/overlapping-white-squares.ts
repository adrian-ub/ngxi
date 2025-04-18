import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiOverlappingWhiteSquaresIcon],svg[openmoji-overlapping-white-squares-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiOverlappingWhiteSquares0" d="M60 12H28v32h32z"></svg:path></svg:defs><svg:g fill="#fff"><svg:path d="M44 28H12v32h32z"></svg:path><svg:use href="#openmojiOverlappingWhiteSquares0"></svg:use></svg:g><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:use href="#openmojiOverlappingWhiteSquares0"></svg:use><svg:path stroke-linecap="round" d="M23.5 29H11v32h32V49"></svg:path></svg:g>`,
})
export class OpenmojiOverlappingWhiteSquaresIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
