import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCocktailIcon],svg[si-glyph-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M4.92 1.898C4.744.712 3.727 0 2.484 0A2.47 2.47 0 0 0 .01 2.462a2.468 2.468 0 0 0 2.954 2.414L.975 1.888z"></svg:path><svg:path d="m9.966 9.001l6.066-5.975l-13-.026l6.042 6v4.031L7.027 15h5.01l-2.045-1.963zM5.188 4l8.594.04l-1.786 1.701c-.47.015-1.142-.087-2.058-.484c-1.219-.442-2.322.405-2.697.743z"></svg:path></svg:g>`,
})
export class SiGlyphCocktailIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
