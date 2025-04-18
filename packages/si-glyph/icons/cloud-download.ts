import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCloudDownloadIcon],svg[si-glyph-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M6.982 8.016v1.987h1.002l-1.492 1.966l-1.476-1.966h1.017V8.016z"></svg:path><svg:path d="M4.969 6.938h3.062v2.027h7.955C15.847 7.531 14.927 6.42 13.8 6.42c-.249 0-.486.066-.711.167c-.693-1.042-1.826-1.724-3.112-1.724c-.206 0-.407.022-.604.057c-.682-1.137-1.866-1.892-3.219-1.892c-1.906 0-3.484 1.501-3.771 3.46c-.018 0-.035-.006-.051-.006c-1.279 0-2.314 1.111-2.314 2.482h4.951z"></svg:path></svg:g>`,
})
export class SiGlyphCloudDownloadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
