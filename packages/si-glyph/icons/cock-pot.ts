import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCockPotIcon],svg[si-glyph-cock-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.127 11.941H1.883C.529 11.941.016 7.004.016 7.004h9.979c0 .001-.268 4.937-1.868 4.937"></svg:path><svg:path d="M15.984 7.486c0 .252-.276.456-.615.456H8.807c-.34 0-.614-.204-.614-.456s.274-.457.614-.457h6.562c.339 0 .615.205.615.457M4 4h1.922v1.297H4z"></svg:path><svg:path d="M0 5h9.906v.969H0z"></svg:path></svg:g>`,
})
export class SiGlyphCockPotIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
