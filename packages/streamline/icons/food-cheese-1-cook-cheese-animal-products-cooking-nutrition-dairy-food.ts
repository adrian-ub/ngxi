import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodCheese1CookCheeseAnimalProductsCookingNutritionDairyFoodIcon],svg[streamline-food-cheese-1-cook-cheese-animal-products-cooking-nutrition-dairy-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.59 5.75H13M9.09.77L9 .75L.75 5.6A.5.5 0 0 0 .5 6v1.75c1 0 2.5 0 2.5 1.75S1.47 11.25.5 11.25v1.5a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-7A5.88 5.88 0 0 0 9.09.77Z"></svg:path><svg:circle cx="10" cy="8.25" r=".5"></svg:circle><svg:circle cx="6.5" cy="10.25" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineFoodCheese1CookCheeseAnimalProductsCookingNutritionDairyFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
