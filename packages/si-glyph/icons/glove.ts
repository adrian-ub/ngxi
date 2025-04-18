import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphGloveIcon],svg[si-glyph-glove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.807 9.708c1.863-1.863 3.68-4.907.307-8.28a4.77 4.77 0 0 0-6.747 0L6.342 2.453v-.719c0-.958-.777-1.735-1.735-1.735C3.648 0 3 .777 3 1.735v4.188l-.847.719l-.613-.613L.313 7.256l7.974 7.974l1.227-1.227l-.549-.549z"></svg:path>`,
})
export class SiGlyphGloveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
