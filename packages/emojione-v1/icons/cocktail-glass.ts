import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1CocktailGlassIcon],svg[emojione-v1-cocktail-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#bac4c9" fill-opacity=".627"><svg:ellipse cx="33.33" cy="59.55" opacity=".67" rx="15.08" ry="4.058"></svg:ellipse><svg:path d="M34.745 58.24c0 .719-.582 1.308-1.306 1.308a1.31 1.31 0 0 1-1.305-1.308V33.02a1.307 1.307 0 1 1 2.611 0z" opacity=".67"></svg:path><svg:path d="M33.33 13.08h21.78L44.22 25.514L33.33 37.943L22.446 25.514L11.554 13.08z" opacity=".67"></svg:path></svg:g><svg:ellipse cx="33.33" cy="13.08" fill="#93b5cc" rx="21.779" ry="3.42"></svg:ellipse><svg:ellipse cx="33.33" cy="13.641" fill="#f79420" rx="18.209" ry="2.859"></svg:ellipse><svg:path fill="#e7e6e6" d="M29.25 30.416a.593.593 0 1 1-.838-.839L56.758 1.229a.59.59 0 0 1 .838 0a.59.59 0 0 1 0 .838z"></svg:path><svg:path fill="#2bb573" d="M46.45 18.202a5.573 5.573 0 0 1-11.147 0a5.574 5.574 0 1 1 11.147 0"></svg:path><svg:circle cx="38.98" cy="17.632" r="2.848" fill="#ee4237"></svg:circle><svg:path fill="#f79420" d="M33.442 15.04H52.19l-9.377 10.708l-9.371 10.698l-9.372-10.698l-9.375-10.708z" opacity=".36"></svg:path>`,
})
export class EmojioneV1CocktailGlassIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
