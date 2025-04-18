import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphMagnetIcon],svg[si-glyph-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 0h3v2.953H1zm13 0h3v2.953h-3zM9.016 15.917c-4.334 0-7.982-3.344-7.982-7.454V4.031H3.97v3.886c0 2.908 2.23 5.13 5.047 5.13c2.826 0 5.016-2.315 5.016-5.13V4.031h2.936v4.432c-.002 4.04-3.576 7.454-7.953 7.454"></svg:path>`,
})
export class SiGlyphMagnetIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
