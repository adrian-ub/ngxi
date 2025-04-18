import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphClampIcon],svg[si-glyph-clamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.297 1.938h5.656V.042H6.297A2.27 2.27 0 0 0 4 2.335v6.371c0 1.287 1.01 2.273 2.297 2.273H9v3.089h-.64v.815c-.825.266-1.39.739-1.39 1.116h4.982c0-.376-.559-.846-1.375-1.112v-.819h-.64v-3.089h1.999V9.04H9.937V6.948c.034-.01.062-.021.093-.031h.906v-.891H8.04v.891h.853c.036.012.066.023.105.034V9.04H6.295a.335.335 0 0 1-.334-.334V2.27a.337.337 0 0 1 .336-.332"></svg:path>`,
})
export class SiGlyphClampIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
