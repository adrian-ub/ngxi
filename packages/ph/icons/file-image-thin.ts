import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFileImageThinIcon],svg[ph-file-image-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107.33 149.78a4 4 0 0 0-6.66 0l-24.25 36.37l-13.06-20.31a4 4 0 0 0-6.72 0l-36 56A4 4 0 0 0 24 228h128a4 4 0 0 0 3.33-6.22Zm-76 70.22L60 175.4l13 20.22a4 4 0 0 0 3.33 1.83a3.93 3.93 0 0 0 3.36-1.78L104 159.21L144.53 220Zm179.5-134.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v88a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-8a4 4 0 0 0 0 8h8a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156Z"></svg:path>`,
})
export class PhFileImageThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
