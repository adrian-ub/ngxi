import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBotl2Icon],svg[si-glyph-botl-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 0h1.969v2.03H8zm1.886 3H8.06s.497 1.247-1.112 2.006C5.691 5.599 6 5.259 6 7.203V14.9c0 .608.521 1.1 1.16 1.1h3.679c.64 0 1.161-.492 1.161-1.1V7.203c-.001-2.029.187-1.436-.97-2.166C9.505 4.08 9.886 3 9.886 3M11 15h-1V7h1z"></svg:path>`,
})
export class SiGlyphBotl2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
