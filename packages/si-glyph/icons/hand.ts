import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphHandIcon],svg[si-glyph-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 6.792c-.39-.193-.847-.089-1.023.231c0 0-1.096 2.399-1.734 2.297c-.344-.056-.619-.38-.742-1.005V1.771c0-.426-.439-.771-.98-.771s-1.02.346-1.02.771v5.167h-1V.771c0-.426-.439-.771-.98-.771s-1.02.346-1.02.771v6.167h-1V2.771c0-.426-.44-.771-.981-.771s-1.019.346-1.019.771v8.415c0 2.584 1.729 4.721 5.678 4.721c4.883 0 6.205-8.188 6.205-8.188c.174-.32.003-.736-.384-.927"></svg:path>`,
})
export class SiGlyphHandIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
