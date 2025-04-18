import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphShare5Icon],svg[si-glyph-share-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.021 4a1.97 1.97 0 0 0-1.706 1H9.708a1.985 1.985 0 0 0-3.697 1q0 .014.003.026l-2.052 1.23a2 2 0 0 0-.961-.257a2 2 0 1 0 2 2l-.003-.032l2.06-1.235c.281.152.6.247.942.247c.731 0 1.362-.396 1.708-.979h3.607c.344.596.976 1 1.706 1A1.99 1.99 0 0 0 17 6c0-1.105-.887-2-1.979-2"></svg:path>`,
})
export class SiGlyphShare5Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
