import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphFileUploadIcon],svg[si-glyph-file-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M15 9.047v4H3v-4H1V16h15.969V9.047z"></svg:path><svg:path d="M8.997 1L6 4.963l2.016.021v4.985h1.937V4.984h2z"></svg:path></svg:g>`,
})
export class SiGlyphFileUploadIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
