import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBubbleMessageTextIcon],svg[si-glyph-bubble-message-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.01.078C3.606.078.031 2.759.031 6.065c0 3.018 2.98 5.508 6.852 5.92l-2.121 3.438l6.197-3.799c2.945-.88 5.031-3.035 5.031-5.559c0-3.306-3.574-5.987-7.98-5.987M10 9H4V8h6zm2-1.954H4V6h8zm0-2.055H4v-1h8z"></svg:path>`,
})
export class SiGlyphBubbleMessageTextIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
