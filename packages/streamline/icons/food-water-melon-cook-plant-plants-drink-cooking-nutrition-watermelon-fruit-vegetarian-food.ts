import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodWaterMelonCookPlantPlantsDrinkCookingNutritionWatermelonFruitVegetarianFoodIcon],svg[streamline-food-water-melon-cook-plant-plants-drink-cooking-nutrition-watermelon-fruit-vegetarian-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.13 1L1 10.65a1.14 1.14 0 0 0 .48 1.55a12.22 12.22 0 0 0 11 0a1.14 1.14 0 0 0 .52-1.55L7.87 1a1 1 0 0 0-1.74 0Z"></svg:path><svg:path d="M12.24 9.29a12 12 0 0 1-10.48 0M5.5 7.5V8m3-.5V8M7 4.5V5"></svg:path></svg:g>`,
})
export class StreamlineFoodWaterMelonCookPlantPlantsDrinkCookingNutritionWatermelonFruitVegetarianFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
