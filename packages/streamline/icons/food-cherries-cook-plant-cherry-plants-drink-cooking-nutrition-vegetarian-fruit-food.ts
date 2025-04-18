import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodCherriesCookPlantCherryPlantsDrinkCookingNutritionVegetarianFruitFoodIcon],svg[streamline-food-cherries-cook-plant-cherry-plants-drink-cooking-nutrition-vegetarian-fruit-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="3.36" cy="10.9" r="2.6"></svg:circle><svg:circle cx="10.64" cy="9.86" r="2.6"></svg:circle><svg:path d="M9.41 7.57A10.36 10.36 0 0 1 6 .5a13.78 13.78 0 0 0-2.6 7.8M3.36.5h5.2"></svg:path></svg:g>`,
})
export class StreamlineFoodCherriesCookPlantCherryPlantsDrinkCookingNutritionVegetarianFruitFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
