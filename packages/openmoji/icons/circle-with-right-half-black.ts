import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCircleWithRightHalfBlackIcon],svg[openmoji-circle-with-right-half-black-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M35 44.286V7c7.956 0 15.587 3.055 21.213 8.494S65 28.309 65 36s-3.16 15.068-8.787 20.506C50.587 61.945 42.956 65 35 65z"></svg:path><svg:path fill="#fff" d="M36 45V9a28 28 0 1 0 0 56z"></svg:path><svg:path fill="#3F3F3F" d="M35 44.286V7c7.956 0 15.587 3.055 21.213 8.494S65 28.309 65 36s-3.16 15.068-8.787 20.506C50.587 61.945 42.956 65 35 65z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linejoin="round" d="M36 64c15.464 0 28-12.536 28-28S51.464 8 36 8S8 20.536 8 36s12.536 28 28 28Z"></svg:path><svg:path stroke-linecap="round" d="M36 8v53"></svg:path></svg:g>`,
})
export class OpenmojiCircleWithRightHalfBlackIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
