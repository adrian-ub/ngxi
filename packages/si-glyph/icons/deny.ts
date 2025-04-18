import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDenyIcon],svg[si-glyph-deny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.016.06a7.97 7.97 0 1 0 .002 15.936A7.97 7.97 0 0 0 9.016.06M3.049 8.028a5.974 5.974 0 0 1 5.967-5.966c1.354 0 2.6.458 3.602 1.221l-8.347 8.348a5.93 5.93 0 0 1-1.222-3.603m5.967 5.966a5.92 5.92 0 0 1-3.447-1.105l8.309-8.309a5.93 5.93 0 0 1 1.104 3.448a5.974 5.974 0 0 1-5.966 5.966"></svg:path>`,
})
export class SiGlyphDenyIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
