import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPinLocationIcon],svg[si-glyph-pin-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.469.021c-3.016 0-5.46 2.296-5.46 5.13c0 .732.166 1.428.458 2.057l5.002 8.668l5-8.668a4.8 4.8 0 0 0 .459-2.057c0-2.835-2.444-5.13-5.459-5.13m.023 9.021c-1.957 0-3.542-1.596-3.542-3.567c0-1.969 1.585-3.565 3.542-3.565c1.954 0 3.539 1.597 3.539 3.565c0 1.971-1.585 3.567-3.539 3.567"></svg:path><svg:path d="M10.979 5.504A2.485 2.485 0 0 1 8.5 7.996a2.485 2.485 0 0 1-2.477-2.492A2.485 2.485 0 0 1 8.5 3.014a2.485 2.485 0 0 1 2.479 2.49"></svg:path></svg:g>`,
})
export class SiGlyphPinLocationIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
