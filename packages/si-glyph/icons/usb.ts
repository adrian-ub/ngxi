import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphUsbIcon],svg[si-glyph-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.074 3.098v1.84h.968V6.46L9.907 7.98V2.93L12 2.921L9.542 0L7.031 2.959h2.058v7.566l-4.13-1.099V7.92A1.495 1.495 0 0 0 4.5 4.999a1.495 1.495 0 0 0-.465 2.919V10l5.054 1.585v1.479A1.496 1.496 0 0 0 9.5 16a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.093-1.438V9.01l5.04-1.949V4.937h.97v-1.84z"></svg:path>`,
})
export class SiGlyphUsbIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
