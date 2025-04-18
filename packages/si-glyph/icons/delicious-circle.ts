import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDeliciousCircleIcon],svg[si-glyph-delicious-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.916 9.021c0-4.369-3.555-7.91-7.937-7.91c-4.385 0-7.938 3.541-7.938 7.91s3.554 7.909 7.938 7.909c4.382.001 7.937-3.54 7.937-7.909m-8.013.063H2.976c0-3.339 2.734-6.044 6.107-6.044l.025.001v5.865h6.081c0 3.329-2.926 6.204-6.287 6.219z"></svg:path>`,
})
export class SiGlyphDeliciousCircleIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
