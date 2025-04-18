import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphFullscreenIcon],svg[si-glyph-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 5h12v8H3zm.918 9.938H1v-2.876h1v1.98h1.918zm13.082 0h-2.938v-.896H16v-1.984h1zm0-9.021h-1v-1.95h-1.943v-.946H17zM2 5.938H1V3h2.938v.938H2z"></svg:path>`,
})
export class SiGlyphFullscreenIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
