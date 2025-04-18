import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodBurgerDrinkBurgerFastCookCookingNutritionFoodIcon],svg[streamline-food-burger-drink-burger-fast-cook-cooking-nutrition-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 .5h6A3.5 3.5 0 0 1 13.5 4v0a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v0A3.5 3.5 0 0 1 4 .5Zm-3.5 7h13M13 10H7l-1.5 1.5l-3-1.5H1a.5.5 0 0 0-.5.5h0a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3h0a.5.5 0 0 0-.5-.5Z"></svg:path>`,
})
export class StreamlineFoodBurgerDrinkBurgerFastCookCookingNutritionFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
