import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSprayIcon],svg[si-glyph-spray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.254.021l-.223.948l1.953.015zm7.709 7.003v-.95S11.3 3.04 10.936 3.04h-.967L9.985.015H8.016v1.966h1v1.06h-.951c-.363 0-2.059 3.033-2.059 3.033v9.269c0 .37.324.672.725.672h5.509c.399 0 .724-.302.724-.672V7.045h.018l-.019-.02zm-.947 8.007h-1.022V7h1.022zm-6.989-13l.232.914l1.679-.883z"></svg:path>`,
})
export class SiGlyphSprayIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
