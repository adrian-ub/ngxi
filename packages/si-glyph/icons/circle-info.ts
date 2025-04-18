import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleInfoIcon],svg[si-glyph-circle-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.969 0a7.938 7.938 0 1 0 0 15.876A7.938 7.938 0 0 0 8.97 0zM8 3h2v2H8zm2 8.765C10 12.447 9.554 13 9 13c-.553 0-1-.552-1-1.235v-4.53C8 6.555 8.447 6 9 6c.554 0 1 .553 1 1.235z"></svg:path>`,
})
export class SiGlyphCircleInfoIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
