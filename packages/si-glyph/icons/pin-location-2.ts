import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPinLocation2Icon],svg[si-glyph-pin-location-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8 .031c-2.717 0-4.92 2.119-4.92 4.733c0 .675.15 1.317.414 1.898l4.59 7.321l4.422-7.321a4.6 4.6 0 0 0 .412-1.898C12.918 2.15 10.717.031 8 .031m0 8.09a3.09 3.09 0 0 1-3.085-3.098A3.09 3.09 0 0 1 8 1.926a3.093 3.093 0 0 1 3.086 3.097A3.093 3.093 0 0 1 8 8.121m1.977-3.138a1.98 1.98 0 0 1-1.978 1.985a1.98 1.98 0 0 1-1.977-1.985A1.98 1.98 0 0 1 7.999 3c1.092 0 1.978.889 1.978 1.983"></svg:path><svg:path d="M5.299 11.823c-1.717.364-2.43.842-2.43 1.379c0 .769 1.831 1.829 5.116 1.829s5.116-1.06 5.116-1.829c0-.535-.708-.999-2.401-1.379v-.82c1.865.366 3.254 1.101 3.254 2.199c0 1.584-3.076 2.77-5.969 2.77s-5.969-1.186-5.969-2.77c0-1.1 1.398-1.849 3.273-2.202z"></svg:path></svg:g>`,
})
export class SiGlyphPinLocation2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
