import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodIceCream2CookFrozenFoodPopsicleFreezerNutritionCreamStickColdIceCookingIcon],svg[streamline-food-ice-cream-2-cook-frozen-food-popsicle-freezer-nutrition-cream-stick-cold-ice-cooking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="8" height="9" x="3" y=".5" rx="1"></svg:rect><svg:path d="M5.5 3v3.5m3-3.5v3.5m0 3V12a1.5 1.5 0 0 1-3 0V9.5"></svg:path></svg:g>`,
})
export class StreamlineFoodIceCream2CookFrozenFoodPopsicleFreezerNutritionCreamStickColdIceCookingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
