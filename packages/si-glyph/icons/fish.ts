import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphFishIcon],svg[si-glyph-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.537 7.348c-.65-1.275-3.148-2.226-6.143-2.226c-3.486 0-6.312 1.289-6.312 2.879s2.825 2.879 6.312 2.879c2.994 0 5.492-.951 6.143-2.226c.659.841 1.953 2.191 3.437 2.191V5.156c-1.484 0-2.778 1.351-3.437 2.192m-10.494.777H1V6.917h1.043z"></svg:path>`,
})
export class SiGlyphFishIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
