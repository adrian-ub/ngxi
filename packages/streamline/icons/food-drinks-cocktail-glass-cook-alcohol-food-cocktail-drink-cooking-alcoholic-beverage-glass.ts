import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodDrinksCocktailGlassCookAlcoholFoodCocktailDrinkCookingAlcoholicBeverageGlassIcon],svg[streamline-food-drinks-cocktail-glass-cook-alcohol-food-cocktail-drink-cooking-alcoholic-beverage-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.71.5a.48.48 0 0 0-.46.31a.49.49 0 0 0 .1.54L7 7l5.65-5.65a.49.49 0 0 0 .1-.54a.48.48 0 0 0-.46-.31ZM7 7v6.5m-3 0h6"></svg:path>`,
})
export class StreamlineFoodDrinksCocktailGlassCookAlcoholFoodCocktailDrinkCookingAlcoholicBeverageGlassIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
