import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphResizeInFrameIcon],svg[si-glyph-resize-in-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M9.994 12.967c0 1.134-.92 2.054-2.055 2.054H4.03a2.055 2.055 0 0 1-2.054-2.054v-3.91c0-1.133.92-2.053 2.054-2.053h3.909c1.135 0 2.055.92 2.055 2.053zm1.784-8.863l-1.171-2.056a.55.55 0 0 0-.551.548L10.038 6.4a.55.55 0 0 0 .552.549l3.765.017a.55.55 0 0 0 .553-.548l-2.014-1.206l3.816-3.794a.77.77 0 0 0 .231-.551a.77.77 0 0 0-.231-.553a.794.794 0 0 0-1.117 0z"></svg:path><svg:path d="M16.04 7.021v6.584c0 .795-.642 1.441-1.435 1.441H3.376a1.44 1.44 0 0 1-1.435-1.441V2.396c0-.794.644-1.44 1.435-1.44H9.98v-.93H3.057a2.054 2.054 0 0 0-2.049 2.053v11.832c0 1.131.92 2.053 2.049 2.053h11.881a2.055 2.055 0 0 0 2.051-2.053v-6.89z"></svg:path></svg:g>`,
})
export class SiGlyphResizeInFrameIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
