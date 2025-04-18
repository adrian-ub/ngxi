import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphHelicopterPadIcon],svg[si-glyph-helicopter-pad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8 .055c-4.418 0-8 3.566-8 7.968c0 4.4 3.582 7.968 8 7.968s8-3.567 8-7.968C16 3.621 12.418.055 8 .055m.004 15.057c-3.934 0-7.121-3.181-7.121-7.105S4.071.902 8.004.902s7.121 3.181 7.121 7.105s-3.187 7.105-7.121 7.105"></svg:path><svg:path d="M8.018 2.08c-3.264 0-5.91 2.654-5.91 5.927s2.646 5.927 5.91 5.927s5.911-2.654 5.911-5.927S11.281 2.08 8.018 2.08m2.059 8.039h-1.14V9.062H7.062v1.057H5.944V5.961h1.118v1.914h1.875V5.961h1.14z"></svg:path></svg:g>`,
})
export class SiGlyphHelicopterPadIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
