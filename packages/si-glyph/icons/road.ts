import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphRoadIcon],svg[si-glyph-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.073 0h-5.04v1.042H7.957V0H3.083l-2 16h14.922zM9 15H8v-3h1zm0-4.958H8V7h1zM7.958 4.959v-2h1v2z"></svg:path>`,
})
export class SiGlyphRoadIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
