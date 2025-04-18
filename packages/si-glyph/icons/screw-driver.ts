import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphScrewDriverIcon],svg[si-glyph-screw-driver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.146 12.334l-1.83-.599l-4.339-4.338l-.579.58l4.338 4.337l.637 1.872l3.067 1.832l.578-.579zM8.255 4.999L7.209 6.054c.157-.39.106-.819-.171-1.101L2.423.281C2.035-.11 1.356-.061.904.396L.393.912c-.45.457-.5 1.145-.111 1.537L4.896 7.12c.276.28.701.33 1.085.173l-.947.955l.715.72l3.22-3.249z"></svg:path>`,
})
export class SiGlyphScrewDriverIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
