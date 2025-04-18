import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphEjectIcon],svg[si-glyph-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.152 1.004a.99.99 0 0 0-.988.99v1.979c0 .547.442.99.988.99h13.855a.99.99 0 0 0 .99-.99V1.994a.99.99 0 0 0-.99-.99zm7.899 14.557a1.49 1.49 0 0 1-2.104 0L1.504 9.116c-.582-.58-.838-2.102 1-2.102h12.988c1.902 0 1.582 1.521 1.002 2.102z"></svg:path>`,
})
export class SiGlyphEjectIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
