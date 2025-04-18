import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSignRoad1Icon],svg[si-glyph-sign-road-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.447 3.902l3.365-1.34l-3.365-1.491H9.959V.167h-.902v.904H5.101v2.831h3.956v2.157H4.566L1.083 7.531l3.483 1.412h4.491v6.031h.902V8.943h3.017V6.059H9.959V3.902z"></svg:path>`,
})
export class SiGlyphSignRoad1Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
