import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphPinLocationLoveIcon],svg[si-glyph-pin-location-love-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.48 0C5.499 0 3.084 2.516 3.084 5.621c0 1.586 5.396 10.295 5.396 10.295s5.395-8.625 5.395-10.295C13.875 2.516 11.46 0 8.48 0m.029 8.25S5.861 7.015 5.861 4.612c0-.831.602-1.505 1.341-1.505c.637 0 1.166.498 1.305 1.164c.133-.665.661-1.164 1.295-1.164c.732 0 1.326.667 1.326 1.49c-.001 2.448-2.619 3.653-2.619 3.653"></svg:path>`,
})
export class SiGlyphPinLocationLoveIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
