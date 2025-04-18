import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodFishCookCookingFishSeafoodNutritionFoodIcon],svg[streamline-food-fish-cook-cooking-fish-seafood-nutrition-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.23 11.06a5 5 0 0 0 2.63-2.14a2.88 2.88 0 0 0 1.25 1A1 1 0 0 0 13.5 9V6.39a1 1 0 0 0-1.39-.92a2.83 2.83 0 0 0-1.25 1c-1-1.56-3.72-2.77-6.45-2.77a4 4 0 0 0-3.91 4a4 4 0 0 0 4.16 3.75h1.08"></svg:path><svg:circle cx="4" cy="6.69" r=".5"></svg:circle><svg:path d="M3.23 3.87C4 2.68 5.81 1.34 9.82 1.8a5.16 5.16 0 0 0 0 3.57M4.64 9.53a3.5 3.5 0 0 0 4 2.76L7.63 9"></svg:path></svg:g>`,
})
export class StreamlineFoodFishCookCookingFishSeafoodNutritionFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
