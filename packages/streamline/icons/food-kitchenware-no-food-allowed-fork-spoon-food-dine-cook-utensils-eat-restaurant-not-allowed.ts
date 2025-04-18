import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodKitchenwareNoFoodAllowedForkSpoonFoodDineCookUtensilsEatRestaurantNotAllowedIcon],svg[streamline-food-kitchenware-no-food-allowed-fork-spoon-food-dine-cook-utensils-eat-restaurant-not-allowed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5.5v10M6 .5V3a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 1 3V.5m-.5 13l13-13m-1 5A14.61 14.61 0 0 1 13 10H8.5m0-4.5v-5a7.41 7.41 0 0 1 2.66 2.34M8.5 13.5V9"></svg:path>`,
})
export class StreamlineFoodKitchenwareNoFoodAllowedForkSpoonFoodDineCookUtensilsEatRestaurantNotAllowedIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
