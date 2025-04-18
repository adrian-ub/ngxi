import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCropIcon],svg[si-glyph-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M1 3v2.036h1.978V3zm12 11v2.031h1.984V14zm-.01-9.015v4.976h1.979V3.039H7.047v1.946z"></svg:path><svg:path d="M6.007 11.041V0H4v12.959h13v-1.918z"></svg:path></svg:g>`,
})
export class SiGlyphCropIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
