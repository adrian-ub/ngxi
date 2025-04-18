import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphStrolleyIcon],svg[si-glyph-strolley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1)"><svg:ellipse cx="4.438" cy="14.459" rx="1.438" ry="1.459"></svg:ellipse><svg:ellipse cx="12.457" cy="14.419" rx="1.457" ry="1.419"></svg:ellipse><svg:path d="M15 10.016H3.953V3.778L1.781.41A.995.995 0 1 0 .174 1.584l1.849 2.901v5.531h-.055c-.553 0-1 .44-1 .984c0 .543.447.984 1 .984H15c.553 0 1-.441 1-.984a.99.99 0 0 0-1-.984"></svg:path></svg:g>`,
})
export class SiGlyphStrolleyIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
