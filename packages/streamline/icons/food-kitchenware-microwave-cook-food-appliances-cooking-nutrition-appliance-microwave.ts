import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodKitchenwareMicrowaveCookFoodAppliancesCookingNutritionApplianceMicrowaveIcon],svg[streamline-food-kitchenware-microwave-cook-food-appliances-cooking-nutrition-appliance-microwave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9" x=".5" y="2.5" rx=".5"></svg:rect><svg:rect width="6.5" height="5" x="2.5" y="4.5" rx=".5"></svg:rect><svg:path d="M11 5h.5M11 6.5h.5M11.25 9h0"></svg:path></svg:g>`,
})
export class StreamlineFoodKitchenwareMicrowaveCookFoodAppliancesCookingNutritionApplianceMicrowaveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
