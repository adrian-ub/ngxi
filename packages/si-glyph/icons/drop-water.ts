import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDropWaterIcon],svg[si-glyph-drop-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 10.333C3 13.463 5.427 16 8.418 16S14 13.463 14 10.333S8.418 0 8.418 0S3 7.204 3 10.333"></svg:path>`,
})
export class SiGlyphDropWaterIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
