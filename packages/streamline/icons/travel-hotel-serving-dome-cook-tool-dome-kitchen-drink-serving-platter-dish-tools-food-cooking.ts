import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelHotelServingDomeCookToolDomeKitchenDrinkServingPlatterDishToolsFoodCookingIcon],svg[streamline-travel-hotel-serving-dome-cook-tool-dome-kitchen-drink-serving-platter-dish-tools-food-cooking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 9.75v-.5a5.5 5.5 0 0 0-11 0v.5m12 0H.5l.32 1.07a2 2 0 0 0 1.92 1.43h8.52a2 2 0 0 0 1.92-1.43Zm-6.5-6v-2"></svg:path>`,
})
export class StreamlineTravelHotelServingDomeCookToolDomeKitchenDrinkServingPlatterDishToolsFoodCookingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
