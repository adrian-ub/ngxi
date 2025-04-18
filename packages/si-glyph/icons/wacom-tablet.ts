import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphWacomTabletIcon],svg[si-glyph-wacom-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 5v9h16V5zm5 2v5h9V7zM.959 7H2v1H.959zM2 12H.959v-1H2zM.953 10V8.979h2V10zM15 13H4V6h11z"></svg:path>`,
})
export class SiGlyphWacomTabletIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
