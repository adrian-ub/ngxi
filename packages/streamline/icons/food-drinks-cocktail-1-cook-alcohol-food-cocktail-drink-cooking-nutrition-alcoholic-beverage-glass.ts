import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodDrinksCocktail1CookAlcoholFoodCocktailDrinkCookingNutritionAlcoholicBeverageGlassIcon],svg[streamline-food-drinks-cocktail-1-cook-alcohol-food-cocktail-drink-cooking-nutrition-alcoholic-beverage-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 8.5L2.48 1.26A.5.5 0 0 1 2.9.5h8.2a.5.5 0 0 1 .42.76Zm0 0v5m-2.5 0h5M3.56 3h6.88"></svg:path>`,
})
export class StreamlineFoodDrinksCocktail1CookAlcoholFoodCocktailDrinkCookingNutritionAlcoholicBeverageGlassIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
