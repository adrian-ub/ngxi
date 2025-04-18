import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphTriangleUpIcon],svg[si-glyph-triangle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.96 2.392a1.49 1.49 0 0 1 2.104 0l6.442 6.444c.582.581.839 2.103-1 2.103H2.518c-1.902 0-1.582-1.521-1.001-2.103z"></svg:path>`,
})
export class SiGlyphTriangleUpIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
