import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNatureEcologyPottedPlantTreePlantSucculentPotIcon],svg[streamline-nature-ecology-potted-plant-tree-plant-succulent-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.5 7.5l-.86 5.16a1 1 0 0 1-1 .84H4.35a1 1 0 0 1-1-.84L2.5 7.5ZM4 .69a3.84 3.84 0 0 0-1.5 3.06A3.63 3.63 0 0 0 6 7.5a3.24 3.24 0 0 0 .94-.14Zm6 0a3.84 3.84 0 0 1 1.5 3.06A3.63 3.63 0 0 1 8 7.5a3.24 3.24 0 0 1-.94-.14Z"></svg:path><svg:path d="M5 3L7 .5L9 3"></svg:path></svg:g>`,
})
export class StreamlineNatureEcologyPottedPlantTreePlantSucculentPotIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
