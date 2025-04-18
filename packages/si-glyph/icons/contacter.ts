import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphContacterIcon],svg[si-glyph-contacter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M3 5H2V4h1zm13.038-1.958H2.046c-.556 0-1.004.452-1.004 1.012v8.976c0 .56.448 1.012 1.004 1.012h13.992c.556 0 1.004-.451 1.004-1.012V4c0-.56-.448-.958-1.004-.958M3 13H2v-1h1zm11-2H4V6h10zm2 2h-1v-1h1zm0-8h-1V4h1z"></svg:path><svg:path d="M5 7v3h5V7z"></svg:path></svg:g>`,
})
export class SiGlyphContacterIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
