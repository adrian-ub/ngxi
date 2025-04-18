import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphKnifeIcon],svg[si-glyph-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.344 5.262L2.746 2.664c-.454-.453-.943.032-1.525-.551C.639 1.531 1.294.745 1.7.34S2.725-.104 3.083.253l3.275 3.276c.357.358-.657 2.092-1.014 1.733m11.594 10.363c-1.212 1.212-6.35-3.236-11.623-8.51l2.318-2.311c0 .001 9.885 10.24 9.305 10.821"></svg:path>`,
})
export class SiGlyphKnifeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
