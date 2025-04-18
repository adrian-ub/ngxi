import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSignBoardIcon],svg[si-glyph-sign-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M4.958 14.828C4.958 15.475 4.53 16 4 16c-.529 0-.958-.524-.958-1.172V1.256C3.042.61 3.471.085 4 .085c.53 0 .958.524.958 1.171z"></svg:path><svg:path d="M15.691 2.042c.688 0 1.246.438 1.246.979S16.379 4 15.691 4H2.246C1.558 4 1 3.562 1 3.021s.558-.979 1.246-.979zm-1.698 4.002H7.965c-1.126 0-1.924-.091-1.924 1.036v4.865c0 1.127.913 1.035 2.039 1.035h5.818c1.126 0 2.039.092 2.039-1.035V7.08c.001-1.127-.818-1.036-1.944-1.036"></svg:path><svg:path d="M7 3h.937v2.874H7zm7 0h.937v2.874H14z"></svg:path></svg:g>`,
})
export class SiGlyphSignBoardIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
