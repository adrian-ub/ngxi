import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphShield2Icon],svg[si-glyph-shield-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.99.062c-3.307 0-5.988 1.944-5.988 1.944l.006 6.054c0 4.999 5.982 7.888 5.982 7.888s5.983-2.722 5.983-7.903s.002-6.038.002-6.038S12.295.062 8.99.062m.063 13.994s-5.1-2.26-5.1-6.17l-.004-5.419S6.234.946 9.053.946z"></svg:path>`,
})
export class SiGlyphShield2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
