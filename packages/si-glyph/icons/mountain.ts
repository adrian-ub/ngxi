import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphMountainIcon],svg[si-glyph-mountain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.012 1.062L4.035 8.87L2.709 7.569S-.305 14 .063 14h15.902v-.002l-3.338-7.1l-.983.612zM5.611 7.521L8.062 2.77l2.285 4.081l-.986.67l-1.34-1.288z"></svg:path>`,
})
export class SiGlyphMountainIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
