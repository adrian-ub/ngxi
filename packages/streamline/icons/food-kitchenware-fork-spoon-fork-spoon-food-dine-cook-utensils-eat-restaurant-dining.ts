import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodKitchenwareForkSpoonForkSpoonFoodDineCookUtensilsEatRestaurantDiningIcon],svg[streamline-food-kitchenware-fork-spoon-fork-spoon-food-dine-cook-utensils-eat-restaurant-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:ellipse cx="10.6" cy="3.5" rx="2.4" ry="3"></svg:ellipse><svg:path d="M10.6 6.5v7M3.5.5v13M6 .5V3a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 1 3V.5"></svg:path></svg:g>`,
})
export class StreamlineFoodKitchenwareForkSpoonForkSpoonFoodDineCookUtensilsEatRestaurantDiningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
