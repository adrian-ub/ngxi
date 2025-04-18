import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCoverFlowIcon],svg[si-glyph-cover-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 4v8h7.894L13 4zm9 0v8h.916V4zm2-2h1v12h-1zM3 4h1v8H3zM1 2h.979v11.918H1z"></svg:path>`,
})
export class SiGlyphCoverFlowIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
