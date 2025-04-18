import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodKitchenwareSpoonPlateForkPlateFoodDineCookUtensilsEatRestaurantDiningIcon],svg[streamline-food-kitchenware-spoon-plate-fork-plate-food-dine-cook-utensils-eat-restaurant-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5.5v2.25a2.5 2.5 0 0 0 5 0V.5M3 .5v13m10.5 0a6.5 6.5 0 0 1 0-13"></svg:path><svg:path d="M13.5 10.5a3.5 3.5 0 0 1 0-7"></svg:path></svg:g>`,
})
export class StreamlineFoodKitchenwareSpoonPlateForkPlateFoodDineCookUtensilsEatRestaurantDiningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
