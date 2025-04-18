import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphLightHouseIcon],svg[si-glyph-light-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.042 0S4.073 1.93 4.073 3h7.938c0-1.07-3.969-3-3.969-3M12 5v.982L16 7V4zM3.958 5L0 4v3l3.958-1zM5 9.969h6V9h1V8H4v1h1zM5 14h6v2H5zm0-3h6v2H5zm0-7h.968v3H5zm5 0h.968v3H10zM7 4h1.984v3H7z"></svg:path>`,
})
export class SiGlyphLightHouseIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
