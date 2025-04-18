import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphUpwardsArrowWithLoopIcon],svg[si-glyph-upwards-arrow-with-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M1 7h2.941v1.943H1z"></svg:path><svg:path d="M14.02 7.049H8.017v1.909h6.052c.545 0 .988.44.988.979v3.129a.985.985 0 0 1-.988.979H7.958a.985.985 0 0 1-.988-.979V3.968h1.75c.392-.393.392-.638 0-1.029L6.708.291a1.003 1.003 0 0 0-1.42 0l-1.99 2.648c-.392.392-.392.638 0 1.029h1.729v9.053a2.977 2.977 0 0 0 2.98 2.967h6.014a2.976 2.976 0 0 0 2.98-2.967v-3.006a2.98 2.98 0 0 0-2.981-2.966"></svg:path></svg:g>`,
})
export class SiGlyphUpwardsArrowWithLoopIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
