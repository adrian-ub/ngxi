import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDrillIcon],svg[si-glyph-drill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.999 4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1-1h-1c0-.553-.446-1-.998-1H5.009C1.019 1 .021 3.447.021 4v3C.021 8.983 1.438 9 2 9l-2 5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1s-4 0 0-5h.007C6.559 9 9 9 9 7h1a1 1 0 0 0 1-1h1a1 1 0 0 0 1-1h3V4zm-10 0h1v3h-1zm-2 0h1v3h-1z"></svg:path>`,
})
export class SiGlyphDrillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
