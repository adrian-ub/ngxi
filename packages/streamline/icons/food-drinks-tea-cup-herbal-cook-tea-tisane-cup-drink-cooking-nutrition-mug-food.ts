import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodDrinksTeaCupHerbalCookTeaTisaneCupDrinkCookingNutritionMugFoodIcon],svg[streamline-food-drinks-tea-cup-herbal-cook-tea-tisane-cup-drink-cooking-nutrition-mug-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 4h8a.5.5 0 0 1 .5.5V9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V4.5A.5.5 0 0 1 2 4ZM.5 13.5h13m-3-8.5h1a2 2 0 0 1 2 2h0a2 2 0 0 1-2 2h-1M3 .5v1m5-1v1M5.5.5v1"></svg:path>`,
})
export class StreamlineFoodDrinksTeaCupHerbalCookTeaTisaneCupDrinkCookingNutritionMugFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
