import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiCocktailGlassIcon],svg[arcticons-emoji-cocktail-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.67 9.611l-7.335 9.69L24 28.993l-7.335-9.69l-7.196-9.506m15.168 5.138h9.73m-20.904 0h11.174M24 28.992V42.5m-9.39 0h18.78M9.47 9.796l-.14-.185m16.43 7.048L35.15 5.5"></svg:path>`,
})
export class ArcticonsEmojiCocktailGlassIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
