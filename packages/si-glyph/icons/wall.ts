import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphWallIcon],svg[si-glyph-wall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3h4v2h-4zm-2 3h3v1.957h-3zm4 0h2v1.969h-2zM0 9h2v2H0zm3 0h4v2H3zm5 0h3v2H8zm4 0h4v2h-4zM5 6h4v1.957H5zM0 6h4v1.957H0zm10 6h3v1.957h-3zm4 0h2v1.969h-2zm-9 0h4v1.957H5zm-5 0h4v1.957H0zm8-9h3v2H8zM3 3h4v2H3zM0 3h2v2H0z"></svg:path>`,
})
export class SiGlyphWallIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
