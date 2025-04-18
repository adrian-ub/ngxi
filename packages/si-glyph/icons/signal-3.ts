import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSignal3Icon],svg[si-glyph-signal-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 12.965h-2a1 1 0 0 1-.948-.684L12.998 9.19l-1.054 3.091a1 1 0 0 1-.948.684H8.998c-.449 0-.844-.3-.964-.732L6.499 6.769l-1.535 5.464a1 1 0 0 1-.964.732H1v-1.934h2.24l2.295-8.268a1 1 0 0 1 1.928 0l2.295 8.268h.518l1.773-5.316a1.001 1.001 0 0 1 1.897 0l1.774 5.316H17z"></svg:path>`,
})
export class SiGlyphSignal3Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
