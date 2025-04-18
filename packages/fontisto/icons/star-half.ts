import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoStarHalfIcon],svg[fontisto-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.855.029a1.305 1.305 0 0 0-1.454.721l-.003.008l-2.511 5.669a.95.95 0 0 1-.805.728h-.005L1.084 8.289a1.66 1.66 0 0 0-.73.406l.001-.001a1.2 1.2 0 0 0 .079 1.78l.002.002l4.535 4.212a1.24 1.24 0 0 1 .405 1.058v-.005l-.972 7.532a.7.7 0 0 0 .083.408l-.002-.004a.58.58 0 0 0 .812.242l-.003.001l6.398-3.726c.081 0 .162-.081.243-.081V.027z"></svg:path>`,
})
export class FontistoStarHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
