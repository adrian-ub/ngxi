import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSignRoad2Icon],svg[si-glyph-sign-road-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.633 3.938L16 2.562l-2.367-1.457l-4.654.418V.021H7v1.573l-3.979.427v2.833L7 4.428v3.063l-4.622-.437L0 8.375l2.378 1.479l4.622.41v5.674h1.979v-5.597l3.979.513V8.055l-3.979-.377V4.357z"></svg:path>`,
})
export class SiGlyphSignRoad2Icon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
