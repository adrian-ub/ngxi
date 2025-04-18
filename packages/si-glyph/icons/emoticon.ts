import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphEmoticonIcon],svg[si-glyph-emoticon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.981.084a7.939 7.939 0 1 0 0 15.876a7.938 7.938 0 0 0 0-15.876M10.998 4a2 2 0 1 1 .003 3.999A2 2 0 0 1 10.998 4M5 4a2 2 0 1 1-.001 4.001A2 2 0 0 1 5 4m3 10c-3.013 0-5-1.899-5-4h10c0 2.101-1.988 4-5 4"></svg:path>`,
})
export class SiGlyphEmoticonIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
