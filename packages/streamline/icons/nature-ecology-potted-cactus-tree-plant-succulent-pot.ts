import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNatureEcologyPottedCactusTreePlantSucculentPotIcon],svg[streamline-nature-ecology-potted-cactus-tree-plant-succulent-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.1 12.61a1 1 0 0 1-1 .89H4.9a1 1 0 0 1-1-.89L3.5 9h7ZM4.5 9V5a2.5 2.5 0 0 1 5 0v4M7 2.5v-2M4.5 6h-2m1-3.5l1.31 1.31M9.5 6h2m-1-3.5L9.19 3.81"></svg:path>`,
})
export class StreamlineNatureEcologyPottedCactusTreePlantSucculentPotIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
