import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodPizzaDrinkCookFastCookingNutritionPizzaFoodIcon],svg[streamline-food-pizza-drink-cook-fast-cooking-nutrition-pizza-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.75.5L8 6l5.5-1.75A3.75 3.75 0 0 0 9.75.5Z"></svg:path><svg:path d="M7.5.52L7 .5A6.5 6.5 0 1 0 13.5 7v-.5"></svg:path><svg:circle cx="5.5" cy="9.5" r=".5"></svg:circle><svg:circle cx="4" cy="5" r=".5"></svg:circle><svg:circle cx="10.5" cy="8" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineFoodPizzaDrinkCookFastCookingNutritionPizzaFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
