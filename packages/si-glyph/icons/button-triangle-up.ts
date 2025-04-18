import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonTriangleUpIcon],svg[si-glyph-button-triangle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.027 8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8M5.154 10c-.205-.186-.205-.774 0-.96l3.467-4.9a.566.566 0 0 1 .746 0l3.478 4.9c.207.185.207.773 0 .96h-7.69z"></svg:path>`,
})
export class SiGlyphButtonTriangleUpIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
