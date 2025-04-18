import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphTagIcon],svg[si-glyph-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.379.681l-.09.09l-.034-.035c-.854-.854-2.275-.818-3.173.08l-.255.254c-.896.897-.933 2.318-.078 3.173l.034.034l-.164.165c-.773.772-.801 1.999-.06 2.738l8.325 8.328c.742.74 1.967.712 2.742-.061l3.758-3.758c.772-.773.801-1.999.061-2.739L8.117.622c-.74-.74-1.967-.713-2.738.059m-.856 4.427a1.596 1.596 0 0 1-1.592-1.6c0-.881.714-1.597 1.592-1.597a1.599 1.599 0 0 1 0 3.197"></svg:path>`,
})
export class SiGlyphTagIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
