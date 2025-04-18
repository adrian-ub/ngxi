import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCloudUploadIcon],svg[si-glyph-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m6.531 5.906l2.123 3.059h7.332C15.847 7.531 14.927 6.42 13.8 6.42c-.249 0-.486.066-.711.167c-.693-1.042-1.826-1.724-3.112-1.724c-.206 0-.407.022-.604.057c-.682-1.137-1.866-1.892-3.219-1.892c-1.906 0-3.484 1.501-3.771 3.46c-.018 0-.035-.006-.051-.006c-1.279 0-2.314 1.111-2.314 2.482h4.343z"></svg:path><svg:path d="M6.016 11.973V9.984H5.014L6.506 8.02l1.476 1.964H6.965v1.989z"></svg:path></svg:g>`,
})
export class SiGlyphCloudUploadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
