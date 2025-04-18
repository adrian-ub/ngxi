import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPersonErrorIcon],svg[si-glyph-person-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.972 4.071c0 1.664-1.332 4.846-2.976 4.846c-1.645 0-2.979-3.182-2.979-4.846s1.334-3.013 2.979-3.013c1.644.001 2.976 1.348 2.976 3.013m5.042 6.874l-.996-.996l-1.494 1.493l-1.493-1.493l-.996.996l1.493 1.493l-1.493 1.495l.996.996l1.493-1.495l1.494 1.495l.996-.996l-1.494-1.495zm-7.31-.615l-.708.15s-2.904-.283-3.76-1.416c-4.098 0-4.223 5.865-4.223 5.865h9.345l-.63-.65l1.951-1.963z"></svg:path>`,
})
export class SiGlyphPersonErrorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
