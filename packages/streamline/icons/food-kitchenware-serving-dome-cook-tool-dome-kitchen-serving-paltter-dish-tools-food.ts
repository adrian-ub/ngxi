import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodKitchenwareServingDomeCookToolDomeKitchenServingPaltterDishToolsFoodIcon],svg[streamline-food-kitchenware-serving-dome-cook-tool-dome-kitchen-serving-paltter-dish-tools-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 3h0a6.5 6.5 0 0 1 6.5 6.5v0a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v0A6.5 6.5 0 0 1 7 3Zm0 0V1.5m-6.5 11h13"></svg:path>`,
})
export class StreamlineFoodKitchenwareServingDomeCookToolDomeKitchenServingPaltterDishToolsFoodIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
