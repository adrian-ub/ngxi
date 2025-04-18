import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodKitchenwareBowlChopStickCookSoupBowlChopsticksCookingNutritionAsianFoodIcon],svg[streamline-food-kitchenware-bowl-chop-stick-cook-soup-bowl-chopsticks-cooking-nutrition-asian-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5A6.5 6.5 0 0 0 13.5 7H.5A6.5 6.5 0 0 0 7 13.5ZM7.5 5l3-4.5M9 5.5l3.5-3"></svg:path>`,
})
export class StreamlineFoodKitchenwareBowlChopStickCookSoupBowlChopsticksCookingNutritionAsianFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
