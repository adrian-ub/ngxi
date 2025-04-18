import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphButtonSellIcon],svg[si-glyph-button-sell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.343 2.033L9.01 3.083l-5.375-1.05C2.18 2.033 1 3.359 1 4.996v5.018c0 1.637 1.18 2.964 2.635 2.964l5.375-1.02l5.333 1.02c1.456 0 2.636-1.327 2.636-2.964V4.996c0-1.637-1.18-2.963-2.636-2.963M6.042 6.004H4.021v.97h.995v1.009h1.026V9.08h-1v.978H2.98V8.939h1.989v-.907H3.98V7.023h-1V5.958h1V4.949h2.062zm3 .026H8.021v.962h.995v1.051h-.974v.873h1v1.141H6.98V4.979h2.062zm3 4.027H9.984V4.958h1.031v3.979h1.026zm3 0h-2.058V4.948h1.031V9h1.026z"></svg:path>`,
})
export class SiGlyphButtonSellIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
