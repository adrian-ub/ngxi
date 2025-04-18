import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphTestTubeEmptyIcon],svg[si-glyph-test-tube-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1V.023H6V1h1.012v6L3 15s0 .962 1 .962h10c1 0 1-.962 1-.962l-4.042-8l-.02-6zm2 14.031H4L8 7V1h2v6z"></svg:path>`,
})
export class SiGlyphTestTubeEmptyIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
