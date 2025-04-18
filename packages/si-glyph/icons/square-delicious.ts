import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSquareDeliciousIcon],svg[si-glyph-square-delicious-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 0v16h16V0zm7.938 15.016V8.01H1.959V.958H9.01v7.011h7.006v7.047z"></svg:path>`,
})
export class SiGlyphSquareDeliciousIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
