import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBulletList2Icon],svg[si-glyph-bullet-list-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1h2v2H1zm0 5h2v2H1zm0 5h2v2H1zm5-9h11v1H6zm0 5h11v1H6zm0 5h11v1H6z"></svg:path>`,
})
export class SiGlyphBulletList2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
