import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphLayout2Icon],svg[si-glyph-layout-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M17 16H1.021V.042H17zm-1.042-.957V1h-14v14.043z"></svg:path><svg:path d="M3 2h5v12H3zm7 0h5v12h-5z"></svg:path></svg:g>`,
})
export class SiGlyphLayout2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
