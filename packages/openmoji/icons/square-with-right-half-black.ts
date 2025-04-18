import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSquareWithRightHalfBlackIcon],svg[openmoji-square-with-right-half-black-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M60 12H35v48h25z"></svg:path><svg:path fill="#fff" d="M36 12H12v48h24z"></svg:path><svg:path fill="#3F3F3F" d="M60 12H35v48h25z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linejoin="round" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965Z"></svg:path><svg:path stroke-linecap="round" d="M36 13v44"></svg:path></svg:g>`,
})
export class OpenmojiSquareWithRightHalfBlackIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
