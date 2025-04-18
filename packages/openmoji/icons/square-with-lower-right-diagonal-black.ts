import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSquareWithLowerRightDiagonalBlackIcon],svg[openmoji-square-with-lower-right-diagonal-black-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M59 11.5L60 59H11.5z"></svg:path><svg:path fill="#fff" d="M12 12h48L12 60z"></svg:path><svg:path fill="#3F3F3F" d="M59 11.5L60 59H11.5z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linejoin="round" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965Z"></svg:path><svg:path stroke-linecap="round" d="M59 13L15 57"></svg:path></svg:g>`,
})
export class OpenmojiSquareWithLowerRightDiagonalBlackIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
