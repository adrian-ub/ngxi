import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDiskAntennaIcon],svg[si-glyph-disk-antenna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.916 8.877c-2.558 2.559-6.535 2.734-8.877.391l9.269-9.27c2.342 2.344 2.169 6.318-.392 8.879M4.625 5.958c-.846-.845-.783-2.274.137-3.194s2.35-.98 3.193-.137z"></svg:path><svg:path d="M13.644 15.997H6.378a.363.363 0 0 1-.318-.542l3.69-6.582a.37.37 0 0 1 .319-.186h.002a.36.36 0 0 1 .318.189l3.574 6.582a.364.364 0 0 1-.319.539"></svg:path></svg:g>`,
})
export class SiGlyphDiskAntennaIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
