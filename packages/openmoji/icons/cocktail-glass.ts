import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCocktailGlassIcon],svg[openmoji-cocktail-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M45.686 20.066h7.982m-35.624 0h19.042"></svg:path><svg:path fill="#B1CC33" d="m17.061 19l6.439 8.5L36 44l12.5-16.5l6.439-8.5z"></svg:path><svg:path fill="#5C9E31" d="M44.939 19L38.5 27.5L31 37.4l5 6.6l12.5-16.5l6.439-8.5z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M36 44v23m-16 0h32m9-56L48.5 27.5L36 44L23.5 27.5L11.239 11.315m0 0L11 11m28 12L55 4"></svg:path>`,
})
export class OpenmojiCocktailGlassIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
