import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPictureCopyIcon],svg[si-glyph-picture-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M14.969.031H5v2.938h1V1h8.027v7.001H11v2.951h3.969z"></svg:path><svg:path d="M0 4v11h10V4zm8.967 8h-8V5h8z"></svg:path></svg:g>`,
})
export class SiGlyphPictureCopyIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
