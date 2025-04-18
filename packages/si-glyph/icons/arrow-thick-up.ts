import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThickUpIcon],svg[si-glyph-arrow-thick-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.65 1.158l-5.485 5.94a.65.65 0 0 0 .002.849l3.868.005v8.024c0 .553.439 1 .982 1h1.965a.99.99 0 0 0 .982-1v-8.02l3.811.005a.65.65 0 0 0-.004-.848L9.414 1.159a.506.506 0 0 0-.764-.001"></svg:path>`,
})
export class SiGlyphArrowThickUpIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
