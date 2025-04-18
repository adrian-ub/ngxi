import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPictureIcon],svg[si-glyph-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1 1)"><svg:path d="m13.842 4l-3.93-2.85a1.495 1.495 0 0 0-2.928.093L2.918 4H.021v9.96h15.938V4zM8.458 3c.556 0 1.034-.305 1.294-.753L11.895 4H5.047l2.166-1.664c.27.4.727.664 1.245.664m3.503 7.085L8.72 11.758l-3.727-4.72L1 13V5h14v8z"></svg:path><svg:circle cx="12.963" cy="6.963" r=".963"></svg:circle></svg:g>`,
})
export class SiGlyphPictureIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
