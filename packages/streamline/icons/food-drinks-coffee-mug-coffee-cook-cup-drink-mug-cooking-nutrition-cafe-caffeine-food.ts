import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodDrinksCoffeeMugCoffeeCookCupDrinkMugCookingNutritionCafeCaffeineFoodIcon],svg[streamline-food-drinks-coffee-mug-coffee-cook-cup-drink-mug-cooking-nutrition-cafe-caffeine-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 5.5h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5a1 1 0 0 1 1-1Zm6 1h.5a2.5 2.5 0 0 1 0 5H9M4 .5v2m3-2v2"></svg:path>`,
})
export class StreamlineFoodDrinksCoffeeMugCoffeeCookCupDrinkMugCookingNutritionCafeCaffeineFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
