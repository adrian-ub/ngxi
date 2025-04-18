import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphZipIcon],svg[si-glyph-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M12.945.021H4.054c-.57 0-1.034.45-1.034 1.004v13.972c0 .555.464 1.004 1.034 1.004h8.891c.57 0 1.034-.449 1.034-1.004V1.025c0-.554-.463-1.004-1.034-1.004m-2.914 2.026h-1v.906h1v1.094h-1v.906h1v1.094h-1v.922h.984v4.047H6.984V6.969h1l-.016-1.922h-1V3.953h1v-.906h-1V1.953h1v-1h2.062v1.094z"></svg:path><svg:path d="M8 8h.953v.953H8z"></svg:path></svg:g>`,
})
export class SiGlyphZipIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
