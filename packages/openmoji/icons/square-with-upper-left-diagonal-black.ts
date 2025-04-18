import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSquareWithUpperLeftDiagonalBlackIcon],svg[openmoji-square-with-upper-left-diagonal-black-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M60 12v48H12z"></svg:path><svg:path fill="#3f3f3f" d="m12.995 12.934l44.882-.08l-43.182 46.195l-1.93-.061z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linejoin="round" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965Z"></svg:path><svg:path stroke-linecap="round" d="M59 13L15 57"></svg:path></svg:g>`,
})
export class OpenmojiSquareWithUpperLeftDiagonalBlackIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
