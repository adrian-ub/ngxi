import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodDrinksWineBottleCookBottleWineDrinkCookingNutritionFoodIcon],svg[streamline-food-drinks-wine-bottle-cook-bottle-wine-drink-cooking-nutrition-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.25 4V1a.5.5 0 0 0-.5-.5h-1.5a.5.5 0 0 0-.5.5v3h0a3.36 3.36 0 0 0-1.5 2.8v5.7a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V6.8A3.36 3.36 0 0 0 8.25 4Zm-4 3.5h5.5m0 3.5h-5.5"></svg:path>`,
})
export class StreamlineFoodDrinksWineBottleCookBottleWineDrinkCookingNutritionFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
