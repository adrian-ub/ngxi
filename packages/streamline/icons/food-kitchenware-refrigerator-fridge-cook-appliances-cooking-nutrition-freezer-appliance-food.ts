import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodKitchenwareRefrigeratorFridgeCookAppliancesCookingNutritionFreezerApplianceFoodIcon],svg[streamline-food-kitchenware-refrigerator-fridge-cook-appliances-cooking-nutrition-freezer-appliance-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="9" height="12" x="2.5" y=".5" rx="1"></svg:rect><svg:path d="M2.5 6h9m-7-3v.5m-.5 9v1m6-1v1"></svg:path></svg:g>`,
})
export class StreamlineFoodKitchenwareRefrigeratorFridgeCookAppliancesCookingNutritionFreezerApplianceFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
