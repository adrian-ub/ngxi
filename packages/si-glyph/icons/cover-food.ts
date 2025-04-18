import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCoverFoodIcon],svg[si-glyph-cover-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M16.471 12.076H1.49c-.271 0-.489.207-.489.461c0 .256.219.463.489.463h14.981c.271 0 .49-.207.49-.463c0-.254-.22-.461-.49-.461M8.987 4.201c-3.839 0-6.95 3.008-6.95 6.718h13.9c.001-3.71-3.112-6.718-6.95-6.718"></svg:path><svg:path d="M8 3h1.969v1.969H8z"></svg:path></svg:g>`,
})
export class SiGlyphCoverFoodIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
