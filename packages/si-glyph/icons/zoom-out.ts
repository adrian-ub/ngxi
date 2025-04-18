import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphZoomOutIcon],svg[si-glyph-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M17 6.01C17 2.725 14.33.063 11.035.063S5.071 2.725 5.071 6.01c0 3.284 2.67 5.948 5.964 5.948S17 9.294 17 6.01M5.889 6c0-2.807 2.289-5.079 5.116-5.079c2.825 0 5.114 2.272 5.114 5.079s-2.289 5.078-5.114 5.078c-2.827 0-5.116-2.272-5.116-5.078m-2.98 9.938l-1.823-1.823l4.148-4.148s.088.773.571 1.256c.483.484 1.252.566 1.252.566z"></svg:path><svg:path d="M13.938 5.996c0 .523-.326.948-.729.948H8.771c-.402 0-.729-.425-.729-.948c0-.525.326-.95.729-.95h4.438c.403 0 .729.425.729.95"></svg:path></svg:g>`,
})
export class SiGlyphZoomOutIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
