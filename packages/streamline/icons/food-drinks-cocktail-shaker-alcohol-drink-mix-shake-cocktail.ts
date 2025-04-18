import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodDrinksCocktailShakerAlcoholDrinkMixShakeCocktailIcon],svg[streamline-food-drinks-cocktail-shaker-alcohol-drink-mix-shake-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.5 6l-.89 6.62a1 1 0 0 1-1 .88H4.38a1 1 0 0 1-1-.88L2.5 6m8.23-2.32a1 1 0 0 0-1-.68H4.22a1 1 0 0 0-.95.68L2.5 6h9Z"></svg:path><svg:path d="M8.5 3V1.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1V3"></svg:path></svg:g>`,
})
export class StreamlineFoodDrinksCocktailShakerAlcoholDrinkMixShakeCocktailIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
