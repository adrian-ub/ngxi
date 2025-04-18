import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiOverlappingWhiteAndBlackSquaresIcon],svg[openmoji-overlapping-white-and-black-squares-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiOverlappingWhiteAndBlackSquares0" d="M60 12H28v32h32z"></svg:path></svg:defs><svg:use href="#openmojiOverlappingWhiteAndBlackSquares0"></svg:use><svg:path fill="#fff" stroke="#fff" stroke-width="2" d="M44 28H12v32h32z"></svg:path><svg:path fill="#3F3F3F" d="M60 12H28v32h32z"></svg:path><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:path stroke-linecap="round" d="M24.5 28H12v32h32V48"></svg:path><svg:use href="#openmojiOverlappingWhiteAndBlackSquares0"></svg:use></svg:g>`,
})
export class OpenmojiOverlappingWhiteAndBlackSquaresIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
