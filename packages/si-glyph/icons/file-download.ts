import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphFileDownloadIcon],svg[si-glyph-file-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M15.031 9.016v4H3v-4H1V16h15.938V9.016z"></svg:path><svg:path d="m9.072 9.947l2.91-3.876l-2.014-.021V1.065H8.03V6.05h-2z"></svg:path></svg:g>`,
})
export class SiGlyphFileDownloadIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
